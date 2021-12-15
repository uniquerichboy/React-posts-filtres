import React, { useState, useEffect } from 'react';
import PostService from './../API/PostService';
import MyModal from './../components/UI/MyModal/MyModal';
import PostFilter from './../components/PostFilter';
import PostForm from './../components/PostForm';
import PostList from './../components/PostList';
import MyButton from './../components/UI/button/MyButton';
import { usePosts } from './../hooks/usePosts';
import './../styles/App.css';
import Loader from './../components/UI/Loader/Loader';
import { useFetching } from './../hooks/useFetching';
import { getPageCount } from './../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import {message} from 'antd';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
    message.success('Remove post');
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  const setVisible = () => setModal(false);

  return ( 
    <div className="App">

      <MyButton type="primary" style={{marginTop: 30}} onClick={() => setModal(true)}>
        Add post
      </MyButton>

      <MyModal visible={modal} title="Create post" setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>
      
      <PostFilter
        filter={filter} 
        setFilter={setFilter} 
      />

      { postError && 
        <h1>Error: {postError}</h1>
      }

      {isPostsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
      : <PostList 
        posts={sortedAndSearchedPosts} 
        remove={removePost}
        />
      }
      <Pagination 
        totalPages={totalPages} 
        page={page} 
        changePage={changePage}
      />

    </div>
  );
}

export default Posts;