import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, PAGE_SIZE, TOTAL_POSTS } from '../utils/constants';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${API_URL}?_page=${page}&_limit=${PAGE_SIZE}`
      );
      setPosts(response.data);
    } catch (err) {
      setError('Ma\'lumotlarni yuklab bo\'lmadi');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefresh = () => {
    fetchPosts(currentPage);
  };

  return {
    posts,
    loading,
    error,
    currentPage,
    totalPosts: TOTAL_POSTS,
    pageSize: PAGE_SIZE,
    handlePageChange,
    handleRefresh,
    fetchPosts
  };
};