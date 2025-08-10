
import { motion } from "framer-motion";
import { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
