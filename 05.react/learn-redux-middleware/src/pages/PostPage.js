import React from 'react';
import Post from '../components/Post';
import { useParams } from 'react-router-dom';
function PostPage(props) {
    const {id} = useParams();
    const postId=Number(id);
    return (
        <div>
       {/* <Post postId={postId}/> */}
       <Post postId={postId}/>
        </div>
    );
}

export default PostPage;