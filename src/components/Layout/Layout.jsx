import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const StyledLayout = styled(Layout)`
  height: 100vh !important;
  width: 100% !important;
  min-height: 100vh !important;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
`;

const { Content } = Layout;

const AppLayout = ({ header, children }) => {
  return (
    <StyledLayout className="app-layout">
      {header}
      <Content className="app-content">
        {children}
      </Content>
    </StyledLayout>
  );
};

export default AppLayout;