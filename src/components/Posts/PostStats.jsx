import React from 'react';
import styled from 'styled-components';
import StatCard from '../UI/StatCard';
import { STATS_CONFIG } from '../../utils/constants';
import { itemVariants } from '../Common/AnimatedContainer';

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const PostStats = ({ currentPage, totalPosts, pageSize, posts }) => {
  const statsData = {
    total: totalPosts,
    pages: Math.ceil(totalPosts / pageSize),
    current: currentPage,
    showing: posts.length
  };

  return (
    <StatsGrid>
      {STATS_CONFIG.map((stat) => (
        <StatCard
          key={stat.key}
          value={statsData[stat.key]}
          label={stat.label}
          color={stat.color}
          iconName={stat.icon}
          variants={itemVariants}
        />
      ))}
    </StatsGrid>
  );
};

export default PostStats;