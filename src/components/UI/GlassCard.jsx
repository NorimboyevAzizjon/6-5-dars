import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledGlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const GlassCard = ({ 
  children, 
  className = '', 
  whileHover = { y: -2 }, 
  ...props 
}) => {
  return (
    <StyledGlassCard
      className={`glass-card ${className}`}
      whileHover={whileHover}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </StyledGlassCard>
  );
};

export default GlassCard;