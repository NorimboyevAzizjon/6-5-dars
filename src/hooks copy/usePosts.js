import { useState, useEffect } from 'react';
import axios from 'axios';

// Mock data
const mockPosts = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  userId: Math.floor(i / 10) + 1,
  title: `Post ${i + 1} - Lorem ipsum dolor sit amet`,
  body: `This is the body content for post ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
}));

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const fetchPosts = async (page = 1) => {
    setLoading(true);
    setError(null);
    
    try {
      // Avval real API ni sinab ko'ramiz
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`,
        { timeout: 5000 } // 5 soniya timeout
      );
      setPosts(response.data);
    } catch (apiError) {
      console.log('API xatosi, mock data ishlatilmoqda:', apiError.message);
      
      // Agar API ishlamasa, mock data bilan ishlaymiz
      await new Promise(resolve => setTimeout(resolve, 500)); // Loading effect
      
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedPosts = mockPosts.slice(startIndex, endIndex);
      
      setPosts(paginatedPosts);
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
    totalPosts: 100, // JSONPlaceholder da 100 ta post
    pageSize,
    handlePageChange,
    handleRefresh,
    fetchPosts
  };
};