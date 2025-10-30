import React from 'react';
import { Typography } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import * as Icons from 'lucide-react';

const { Title, Text } = Typography;

const StyledStatCard = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.color}20, ${props => props.color}10);
  border: 1px solid ${props => props.color}30;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  backdrop-filter: blur(10px);
  cursor: pointer;
`;

const StatCard = ({ 
  value, 
  label, 
  color, 
  iconName, 
  ...motionProps 
}) => {
  const IconComponent = Icons[iconName];
  
  return (
    <StyledStatCard
      color={color}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...motionProps}
    >
      {IconComponent && (
        <IconComponent size={32} color={color} style={{ marginBottom: 12 }} />
      )}
      <Title level={3} style={{ margin: 0, color }}>
        {value}
      </Title>
      <Text type="secondary">{label}</Text>
    </StyledStatCard>
  );
};

export default StatCard;