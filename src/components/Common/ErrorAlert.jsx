import React from 'react';
import { Alert, Button } from 'antd';
import { motion } from 'framer-motion';

const ErrorAlert = ({ error, onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        style={{ marginBottom: 24, borderRadius: 12 }}
        action={
          <Button size="small" onClick={onRetry}>
            Retry
          </Button>
        }
      />
    </motion.div>
  );
};

export default ErrorAlert;