import React from 'react';
import { Card } from 'antd';
import { FileText } from 'lucide-react';


import AppLayout from './components/Layout/Layout';
import Header from './components/Layout/Header';
import AnimatedContainer from './components/Common/AnimatedContainer';
import GlassCard from './components/UI/GlassCard';
import PostStats from './components/Posts/PostStats';
import PostTable from './components/Posts/PostTable';
import PostPagination from './components/Posts/PostPagination';
import ErrorAlert from './components/Common/ErrorAlert';
import LoadingSpinner from './components/UI/LoadingSpinner';


import { usePosts } from './hooks/usePosts';


import './App.css';

const App = () => {
  const {
    posts,
    loading,
    error,
    currentPage,
    totalPosts,
    pageSize,
    handlePageChange,
    handleRefresh
  } = usePosts();

  return (
    <AppLayout
      header={
        <Header 
          onRefresh={handleRefresh} 
          loading={loading} 
        />
      }
    >
      <AnimatedContainer>
        {/* Statistics */}
        <PostStats
          currentPage={currentPage}
          totalPosts={totalPosts}
          pageSize={pageSize}
          posts={posts}
        />

        {/* Main Content - 100% height */}
        <div className="main-content">
          <GlassCard>
            <Card 
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FileText size={20} color="#1890ff" />
                  <span>Posts Dashboard</span>
                </div>
              }
              bordered={false}
              style={{ 
                background: 'transparent',
                border: 'none',
                height: '100%'
              }}
              extra={
                <div style={{ color: '#666' }}>
                  Page {currentPage} of {Math.ceil(totalPosts / pageSize)}
                </div>
              }
              bodyStyle={{ 
                padding: 0,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column',
                padding: '24px'
              }}>
                {error && (
                  <ErrorAlert 
                    error={error} 
                    onRetry={handleRefresh} 
                  />
                )}
                
                {loading && posts.length === 0 ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <PostTable 
                      posts={posts} 
                      loading={loading} 
                    />
                    <div className="pagination-container">
                      <PostPagination
                        currentPage={currentPage}
                        totalPosts={totalPosts}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </>
                )}
              </div>
            </Card>
          </GlassCard>
        </div>
      </AnimatedContainer>
    </AppLayout>
  );
};

export default App;