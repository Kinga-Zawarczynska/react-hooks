import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage]= useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  //getCurrentPosts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirtsPost = indexOfLastPost-postsPerPage;
  const currentPosts = posts.slice(indexOfFirtsPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="App">
      <h1 className="text-primary">
        My Blog
      </h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    
    </div>
  );
}

export default App;
