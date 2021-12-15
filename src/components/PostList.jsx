import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({posts, remove}) => {
    
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return (
            <TransitionGroup className="AllPosts">
            { posts.map((post) =>
                <CSSTransition key={post.id} timeout={200} classNames="post">
                    <PostItem remove={remove} post={post} />
                </CSSTransition>
            )}   
            </TransitionGroup> 
    );
};

export default PostList;