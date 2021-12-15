import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
            <Card title={props.post.title} extra={<a href="#" onClick={() => navigate(`/posts/${props.post.id}`) }>More</a>} style={{ width: 300 }}>
                <p>{props.post.body}</p>
                <MyButton type="primary" style={{marginRight: 10}} onClick={() => navigate(`/posts/${props.post.id}`) }>Open</MyButton>
                <MyButton type="danger" onClick={() => props.remove(props.post) }>Delete</MyButton>
            </Card>
    );
};

export default PostItem;