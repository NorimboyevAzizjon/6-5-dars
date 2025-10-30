import React from 'react';
import { Spin, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Text } = Typography;

const LoadingSpinner = ({ message = "Loading posts..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-container"
    >
      <div style={{ textAlign: 'center' }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>
          <Text type="secondary">{message}</Text>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;