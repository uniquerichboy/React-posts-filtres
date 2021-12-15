import React, {useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { Card, Col, Row, PageHeader } from 'antd';
import { useNavigate } from 'react-router';

const PostidPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const navigate = useNavigate()

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, Comerror] = useFetching(async (id) => {
        const response = await PostService.getComments(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div>
            {isLoading 
            ?   <Loader />
            :   
            <React.Fragment>
                <PageHeader
                    className="site-page-header"
                    onBack={() => navigate('/')}
                    title={post.title}
                />
                <Row className='center' style={{margin: 15}}>
                        <Col>
                            <Card title={post.title} bordered={false}>
                                {post.body}
                            </Card>
                        </Col>
                </Row>
            </React.Fragment>
            }

            <h1>Comments</h1>

            {isComLoading 
            ?   <Loader />
            :   <div className='center'>{ comments.map(comm => 
                <Row style={{margin: 15, maxWidth: 400}}>
                    <Col>
                        <Card title={comm.email} bordered={false}>
                            {comm.body}
                        </Card>
                    </Col>
                </Row>
                ) }</div>
            }

        </div>
    );
};

export default PostidPage;