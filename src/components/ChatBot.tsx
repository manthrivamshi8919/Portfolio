import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronDown } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  time: string;
}

const CHAT_ENDPOINT = "https://resume-rag-chatbot-production.up.railway.app/chat";

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// ── Lightweight Markdown Renderer ──────────────────────────────────────────
function FormattedText({ text, isUser }: { text: string; isUser: boolean }) {
  const lines = text.split("\n");
  return (
    <div className="cb-prose">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height: 6 }} />;
        const bullet = line.match(/^[\-\*•]\s+(.*)/);
        if (bullet)
          return (
            <div key={i} className="cb-bullet">
              <span className={`cb-bdot ${isUser ? "cb-bdot-user" : ""}`}>•</span>
              <span>{inline(bullet[1], isUser)}</span>
            </div>
          );
        const num = line.match(/^(\d+)\.\s+(.*)/);
        if (num)
          return (
            <div key={i} className="cb-num-row">
              <span className={`cb-num ${isUser ? "cb-num-user" : ""}`}>{num[1]}.</span>
              <span>{inline(num[2], isUser)}</span>
            </div>
          );
        const h = line.match(/^#{1,3}\s+(.*)/);
        if (h) return <p key={i} className="cb-h">{inline(h[1], isUser)}</p>;
        return <p key={i} className="cb-p">{inline(line, isUser)}</p>;
      })}
    </div>
  );
}

function inline(text: string, isUser: boolean) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (/^\*[^*]+\*$/.test(part)) return <em key={i}>{part.slice(1, -1)}</em>;
    if (/^`[^`]+`$/.test(part))
      return <code key={i} className={`cb-code ${isUser ? "cb-code-user" : ""}`}>{part.slice(1, -1)}</code>;
    return part;
  });
}

// ── Typing Dots ─────────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="cb-typing-wrap">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="cb-dot-anim"
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ── Main Chatbot ─────────────────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  useEffect(() => {
    if (open) {
      setHasNew(false);
      setTimeout(() => inputRef.current?.focus(), 320);
    }
  }, [open]);

  const send = async () => {
    const q = input.trim();
    if (!q || loading) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", text: q, time: getTime() };
    setMsgs((p) => [...p, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      const answer = data.answer ?? data.response ?? data.reply ?? data.message ?? "I couldn't find an answer. Please rephrase.";
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: "bot", text: answer, time: getTime() };
      setMsgs((p) => [...p, botMsg]);
      if (!open) setHasNew(true);
    } catch {
      setMsgs((p) => [...p, { id: (Date.now() + 1).toString(), role: "bot", text: "⚠️ Connection failed. Please try again.", time: getTime() }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Global styles ─── */}
      <style>{`
        /* ─ Trigger ─ */
        .cb-fab {
          position: fixed; bottom: 28px; right: 28px; z-index: 9999;
          width: 60px; height: 60px; border-radius: 50%; border: none; cursor: pointer;
          background: linear-gradient(145deg, #0ea5e9, #0284c7);
          box-shadow: 0 8px 28px rgba(14,165,233,0.50), 0 2px 8px rgba(0,0,0,0.15);
          display: flex; align-items: center; justify-content: center;
          transition: box-shadow 0.25s, transform 0.18s;
        }
        .cb-fab:hover { box-shadow: 0 12px 40px rgba(14,165,233,0.65); transform:scale(1.07); }
        .cb-fab:active { transform:scale(0.95); }

        /* Notification badge */
        .cb-badge {
          position:absolute; top:4px; right:4px;
          width:13px; height:13px; border-radius:50%;
          background:#f43f5e; border:2px solid #fff;
          animation: cb-badgePop 0.35s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes cb-badgePop { from{transform:scale(0)} to{transform:scale(1)} }

        /* Ripple ring */
        .cb-ring {
          position:absolute; inset:-6px;
          border-radius:50%;
          border:2.5px solid rgba(14,165,233,0.4);
          animation: cb-ripple 2.2s ease-out infinite;
        }
        .cb-ring2 { animation-delay:1.1s; }
        @keyframes cb-ripple {
          0%  { transform:scale(0.85); opacity:0.8; }
          100%{ transform:scale(1.45); opacity:0; }
        }

        /* ─ Panel ─ */
        .cb-panel {
          position:fixed; bottom:102px; right:28px; z-index:9998;
          width:400px; max-width:calc(100vw - 32px);
          border-radius:22px; overflow:hidden; display:flex; flex-direction:column;
          background:hsl(var(--card));
          border:1px solid hsl(var(--border));
          box-shadow: 0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.10);
        }

        /* ─ Header ─ */
        .cb-header {
          flex-shrink:0; padding:18px 18px 14px;
          background: linear-gradient(135deg,#0ea5e9 0%,#0369a1 100%);
          display:flex; align-items:center; gap:13px; position:relative;
        }
        .cb-header::after {
          content:''; position:absolute; inset:0;
          background: radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.08), transparent 65%);
          pointer-events:none;
        }
        .cb-hav {
          width:44px; height:44px; border-radius:50%; flex-shrink:0;
          background:rgba(255,255,255,0.18); border:2px solid rgba(255,255,255,0.35);
          display:flex; align-items:center; justify-content:center;
          backdrop-filter:blur(6px);
        }
        .cb-hinfo { flex:1; min-width:0; }
        .cb-hname { font-size:15px; font-weight:700; color:#fff; letter-spacing:0.02em; }
        .cb-hsub { display:flex; align-items:center; gap:6px; margin-top:3px; }
        .cb-hled {
          width:8px; height:8px; border-radius:50%; background:#4ade80;
          box-shadow:0 0 0 2px rgba(74,222,128,0.3);
          animation:cb-blink 2s ease-in-out infinite;
        }
        @keyframes cb-blink{ 0%,100%{opacity:1} 50%{opacity:0.45} }
        .cb-htext { font-size:12px; color:rgba(255,255,255,0.8); }
        .cb-hclose {
          background:rgba(255,255,255,0.15); border:none; border-radius:50%;
          width:32px; height:32px; display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:background 0.18s; flex-shrink:0;
        }
        .cb-hclose:hover { background:rgba(255,255,255,0.28); }



        /* ─ Messages ─ */
        .cb-msgs {
          flex:1; overflow-y:auto; overflow-x:hidden;
          padding:12px 16px 16px; display:flex; flex-direction:column; gap:14px;
          min-height:300px; max-height:360px;
        }
        .cb-msgs::-webkit-scrollbar { width:3px; }
        .cb-msgs::-webkit-scrollbar-thumb { background:hsl(var(--border)); border-radius:99px; }



        /* Message rows */
        .cb-row { display:flex; gap:9px; max-width:100%; }
        .cb-row.user { flex-direction:row-reverse; }
        .cb-row-av {
          width:30px; height:30px; border-radius:50%; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; margin-top:2px;
        }
        .cb-row.bot .cb-row-av { background:linear-gradient(145deg,#0ea5e9,#0284c7); }
        .cb-row.user .cb-row-av { background:hsl(var(--muted)); }

        .cb-msg-col { display:flex; flex-direction:column; max-width:calc(100% - 44px); gap:4px; }
        .cb-row.user .cb-msg-col { align-items:flex-end; }

        .cb-bubble {
          padding:11px 14px; border-radius:16px;
          font-size:13.5px; line-height:1.65; word-break:break-word; overflow-wrap:anywhere;
        }
        .cb-row.bot .cb-bubble {
          background:hsl(var(--muted)); color:hsl(var(--foreground));
          border-top-left-radius:4px;
        }
        .cb-row.user .cb-bubble {
          background:linear-gradient(145deg,#0ea5e9,#0284c7);
          color:#fff; border-top-right-radius:4px;
          box-shadow:0 4px 14px rgba(14,165,233,0.30);
        }
        .cb-ts { font-size:10.5px; color:hsl(var(--muted-foreground)); padding:0 2px; }

        /* Typing */
        .cb-typing-row { display:flex; gap:9px; align-items:flex-end; }
        .cb-typing-bub {
          padding:12px 16px; border-radius:16px; border-top-left-radius:4px;
          background:hsl(var(--muted));
        }
        .cb-typing-wrap { display:flex; gap:5px; align-items:center; }
        .cb-dot-anim {
          display:block; width:7px; height:7px; border-radius:50%;
          background:hsl(var(--muted-foreground)); opacity:0.6;
        }

        /* Prose */
        .cb-prose { display:flex; flex-direction:column; gap:3px; }
        .cb-p { margin:0; }
        .cb-h { margin:0; font-weight:700; font-size:14px; }
        .cb-bullet { display:flex; gap:7px; align-items:flex-start; }
        .cb-bdot { color:#0ea5e9; font-size:10px; margin-top:5px; flex-shrink:0; }
        .cb-bdot-user { color:rgba(255,255,255,0.8); }
        .cb-num-row { display:flex; gap:7px; align-items:flex-start; }
        .cb-num { font-weight:700; color:#0ea5e9; min-width:18px; flex-shrink:0; font-size:13px; }
        .cb-num-user { color:rgba(255,255,255,0.85); }
        code.cb-code {
          background:rgba(14,165,233,0.1); color:#0ea5e9;
          padding:1px 5px; border-radius:4px; font-size:12px;
          font-family:'Courier New',monospace;
        }
        code.cb-code-user { background:rgba(255,255,255,0.2); color:#fff; }

        /* ─ Input bar ─ */
        .cb-inputbar {
          flex-shrink:0; padding:12px 14px 14px;
          border-top:1px solid hsl(var(--border));
          background:hsl(var(--card));
        }
        .cb-input-row { display:flex; align-items:center; gap:9px; }
        .cb-inputwrap {
          flex:1; display:flex; align-items:center;
          background:hsl(var(--muted)); border-radius:14px;
          padding:0 14px; min-height:46px;
          border:1.5px solid transparent; transition:border-color 0.2s;
        }
        .cb-inputwrap:focus-within { border-color:#0ea5e9; }
        .cb-input {
          flex:1; background:transparent; border:none; outline:none;
          font-size:13.5px; color:hsl(var(--foreground)); padding:10px 0;
        }
        .cb-input::placeholder { color:hsl(var(--muted-foreground)); opacity:0.65; }
        .cb-send {
          width:46px; height:46px; border-radius:14px; border:none;
          background:linear-gradient(145deg,#0ea5e9,#0284c7);
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; flex-shrink:0;
          box-shadow:0 4px 16px rgba(14,165,233,0.38);
          transition:opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          position:relative; overflow:hidden;
        }
        .cb-send::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(to bottom right, rgba(255,255,255,0.15), transparent);
          pointer-events:none;
        }
        .cb-send:disabled { opacity:0.38; cursor:not-allowed; box-shadow:none; }
        .cb-send:not(:disabled):hover { transform:scale(1.07); box-shadow:0 6px 22px rgba(14,165,233,0.52); }
        .cb-send:not(:disabled):active { transform:scale(0.94); }

        /* ─ Footer ─ */
        .cb-footer {
          text-align:center; padding:7px 14px 11px;
          font-size:10.5px; color:hsl(var(--muted-foreground));
          letter-spacing:0.03em;
        }
        .cb-footer span { color:#0ea5e9; font-weight:600; }
      `}</style>

      {/* ── Floating Trigger ─────────────────────────────────────── */}
      <motion.button
        id="chatbot-trigger"
        aria-label="Open AI chatbot"
        className="cb-fab"
        onClick={() => setOpen((v) => !v)}
        style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999 }}
        whileTap={{ scale: 0.92 }}
      >
        {/* Ripple rings */}
        {!open && <span className="cb-ring" />}
        {!open && <span className="cb-ring cb-ring2" />}

        {/* Notification badge */}
        {hasNew && !open && <span className="cb-badge" />}

        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <ChevronDown size={24} color="#fff" />
            </motion.div>
          ) : (
            <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <MessageCircle size={24} color="#fff" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Panel ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="chatbot-panel"
            className="cb-panel"
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
          >
            {/* Header */}
            <div className="cb-header">
              <div className="cb-hav">
                <Bot size={22} color="#fff" />
              </div>
              <div className="cb-hinfo">
                <div className="cb-hname">Vamshi's AI Assistant</div>
                <div className="cb-hsub">
                  <span className="cb-hled" />
                  <span className="cb-htext">Online · Resume Intelligence</span>
                </div>
              </div>
              <button className="cb-hclose" onClick={() => setOpen(false)} aria-label="Close chat">
                <X size={14} color="#fff" />
              </button>
            </div>

            {/* Messages */}
            <div className="cb-msgs">

              {msgs.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`cb-row ${msg.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  {/* Avatar */}
                  <div className="cb-row-av">
                    {msg.role === "bot" ? (
                      <Sparkles size={13} color="#fff" />
                    ) : (
                      <User size={13} color="hsl(var(--muted-foreground))" />
                    )}
                  </div>

                  {/* Bubble + timestamp */}
                  <div className="cb-msg-col">
                    <div className="cb-bubble">
                      <FormattedText text={msg.text} isUser={msg.role === "user"} />
                    </div>
                    <span className="cb-ts">{msg.time}</span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div className="cb-typing-row" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <div
                    className="cb-row-av"
                    style={{ background: "linear-gradient(145deg,#0ea5e9,#0284c7)", width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}
                  >
                    <Sparkles size={13} color="#fff" />
                  </div>
                  <div className="cb-typing-bub">
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="cb-inputbar">
              <div className="cb-input-row">
                <div className="cb-inputwrap">
                  <input
                    ref={inputRef}
                    id="chatbot-input"
                    className="cb-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())}
                    placeholder="Ask about Vamshi…"
                    disabled={loading}
                  />
                </div>
                <motion.button
                  id="chatbot-send"
                  className="cb-send"
                  disabled={!input.trim() || loading}
                  onClick={send}
                  whileTap={input.trim() && !loading ? { scale: 0.92 } : {}}
                  aria-label="Send message"
                >
                  <Send size={17} color="#fff" />
                </motion.button>
              </div>
            </div>

            {/* Footer */}
            <div className="cb-footer">
              Powered by <span>Resume RAG AI</span> · Built for Vamshi
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
