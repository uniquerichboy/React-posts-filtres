import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        // clear inputs
        setPost({ title: '', body: ''})
      }
    return (
        <form>
            <MyInput
            type="text"
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value} ) }
            placeholder="name post"
            />

            <MyInput
            type="text"
            style={{marginTop: 10}}
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value} ) }
            placeholder="descript post"
            />
            <MyButton type="primary" style={{marginTop: 10}} onClick={addNewPost}>Add post</MyButton>
        </form>
);
};

export default PostForm;