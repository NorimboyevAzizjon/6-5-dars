import React from 'react';
import { Table, Tag, Space, Typography } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Users, ExternalLink } from 'lucide-react';

const { Text } = Typography;

const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const AnimatedTableRow = styled(motion.tr)`
  &:hover {
    transform: scale(1.01);
    transition: all 0.3s ease;
  }
`;

const PostTable = ({ posts, loading }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 70,
      render: (id) => <Tag color="blue">#{id}</Tag>,
    },
    {
      title: 'User',
      dataIndex: 'userId',
      key: 'userId',
      width: 80,
      render: (userId) => (
        <Space>
          <Users size={14} />
          <Text strong>{userId}</Text>
        </Space>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div>
          <Text strong style={{ color: '#1890ff', display: 'block', marginBottom: 4 }}>
            {text}
          </Text>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Post ID: {record.id}
          </Text>
        </div>
      ),
    },
    {
      title: 'Content Preview',
      dataIndex: 'body',
      key: 'body',
      render: (text) => (
        <div style={{ position: 'relative' }}>
          <Text style={{ color: '#666', lineHeight: 1.4 }}>
            {text.length > 80 ? `${text.substring(0, 80)}...` : text}
          </Text>
          {text.length > 80 && (
            <ExternalLink size={12} style={{ marginLeft: 8, color: '#1890ff' }} />
          )}
        </div>
      ),
    }
  ];

  return (
    <TableContainer className="table-container">
      <Table
        dataSource={posts}
        columns={columns}
        rowKey="id"
        pagination={false}
        loading={loading}
        scroll={{ x: 800, y: '100%' }}
        components={{
          body: {
            row: (props) => (
              <AnimatedTableRow
                {...props}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ),
          },
        }}
        style={{ flex: 1 }}
      />
    </TableContainer>
  );
};

export default PostTable;