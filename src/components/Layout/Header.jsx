import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { FileText, RefreshCw } from 'lucide-react';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = ({ onRefresh, loading }) => {
  return (
    <AntHeader className="app-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 40,
          height: 40,
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <FileText color="white" size={20} />
        </div>
        <Title level={3} style={{ color: 'white', margin: 0, fontWeight: 700 }}>
          Post Manager
        </Title>
      </div>
      
      <Button 
        type="primary" 
        ghost
        icon={<RefreshCw size={16} />}
        onClick={onRefresh}
        loading={loading}
      >
        Refresh
      </Button>
    </AntHeader>
  );
};

export default Header;