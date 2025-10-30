
import React from 'react';
import { Pagination, Typography } from 'antd';

const { Text } = Typography;

const PostPagination = ({ 
  currentPage, 
  totalPosts, 
  pageSize, 
  onPageChange 
}) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      marginTop: 32 
    }}>
      <Pagination
        current={currentPage}
        total={totalPosts}
        pageSize={pageSize}
        onChange={onPageChange}
        showSizeChanger={false}
        showQuickJumper
        showTotal={(total, range) => (
          <Text style={{ color: '#666' }}>
            Showing {range[0]}-{range[1]} of {total} posts
          </Text>
        )}
        style={{ 
          padding: '16px 24px',
          background: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 12,
          border: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
};

export default PostPagination;