import React from 'react';
import { Button } from './button';
import AnimatedBackground from './animated-background';

const HeroBanner: React.FC = () => {
  return (
    <AnimatedBackground>
      <div className="container mx-auto px-6 text-center">
        <article className="flex flex-col items-center space-y-8">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{
              fontFamily: 'inherit',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              letterSpacing: '-0.05rem',
            }}
          >
            Intelligence in Motion
          </h1>
          
          <p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{
              fontFamily: 'inherit',
            }}
          >
            Experience the next generation of data analytics.
            Our platform provides actionable insights that drive
            growth and innovation.
          </p>
          
          <Button
            className="btn-gradient"
            style={{
              color: 'hsl(220, 10%, 100%)',
              background: 'linear-gradient(45deg, hsl(270, 85%, 50%), hsl(210, 85%, 50%))',
              boxShadow: '0 5px 20px hsla(270, 75%, 45%, 0.35)',
              padding: '0.75rem 1.75rem',
              borderRadius: '3rem',
              fontWeight: 500,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-0.25rem)';
              e.currentTarget.style.boxShadow = '0 10px 30px hsla(270, 75%, 45%, 0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px hsla(270, 75%, 45%, 0.35)';
            }}
          >
            Request a Demo
          </Button>
        </article>
      </div>
    </AnimatedBackground>
  );
};

export default HeroBanner;
