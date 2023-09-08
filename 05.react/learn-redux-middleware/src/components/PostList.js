import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../modules/posts';
import { Link } from 'react-router-dom';

function PostList(props) {

    const {data, loading, error} = useSelector(state => state.posts.posts)
    const dispatch = useDispatch(); // dispatch 리턴

    //컴포넌트가 마운트 될때 포스트 전체 목록 요청 
    useEffect(()=> {
                //getPosts()의 자리는 함수 자리로 thunk 함수를 사용하게 된다. 
        dispatch(getPosts())
    },[dispatch])
    if(loading) return <div>로딩중....</div>
    if(error) return <div>에러발생....</div>
    if(!data) return null
    return (
       
        <div>
            <ul>
                {data.map(post=>(
                        // 페이지 이동때 post.id 넘겨 주기 추가 
                    <li key={post.id}><Link to={`/${post.id}`}> {post.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;