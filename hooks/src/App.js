import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { Posts } from './components/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage]= useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);


  return (
    <div className="App">
      <h1 className="text-primary">
        My Blog
      </h1>
      <Posts posts={posts} loading={loading} />
    
    </div>
  );
}

export default App;
