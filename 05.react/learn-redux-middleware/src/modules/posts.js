//내보기 한 것들을 다 받을 수 있게 된다. 
import * as postsAPI from '../api/posts';


//액션 타입, 액션생성함수, 리듀서 

//액션타입 
//포스트 전체 조회 
const GET_POSTS = "GET_POSTS" // 요청시작 
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS "  //요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR" //요청실패

//포스트 하나 조회 
const GET_POST = "GET_POST" // 요청시작 
const GET_POST_SUCCESS = "GET_POST_SUCCESS "  //요청 성공
const GET_POST_ERROR = "GET_POST_ERROR" //요청실패

//thunk함수 
//import * as postsAPI from '../api/posts'; 했기에 가능하다 
export const getPosts = () => async dispatch => {
    dispatch({type:GET_POSTS}); //요청이 시작된다
    try{
        //각각 api 호출 해준다
        const posts = await postsAPI.getPosts();
        dispatch({type : GET_POSTS_SUCCESS, posts: posts})
    }
    catch(e){
        dispatch({ type:GET_POSTS_ERROR, error: e})

    }

}
export const getPost = (id) => async dispatch => {
    dispatch({type:GET_POST}); //요청이 시작된다
    try{
        //각각 api 호출 해준다
        const post = await postsAPI.getPostsById(id);
        dispatch({type : GET_POST_SUCCESS, post: post})
    }
    catch(e){
        dispatch({ type:GET_POST_ERROR, error: e})

    }
}

//초기 상태 
const initialState ={
posts: {
    loading : false,
    data : null,
    error : null
},
post: {
    loading : false,
    data : null,
    error : null
}

}

export default function posts(state=initialState, action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state, 
                posts: {
                    loading : true,
                    data : null,
                    error : null
                }
            }
            case GET_POSTS_SUCCESS : 
            return {
                ...state, 
                posts: {
                    loading : false,
                    data : action.posts,
                    error : null
                }
            }
            case GET_POSTS_ERROR : 
            return {
                ...state, 
                posts: {
                    loading : false,
                    data : null,
                    error : action.error
                }
            }
            case GET_POST:
            return {
                ...state, 
                post: {
                    loading : true,
                    data : null,
                    error : null
                }
            }
            case GET_POST_SUCCESS : 
            return {
                ...state, 
                post: {
                    loading : false,
                    data : action.post,
                    error : null
                }
            }
            case GET_POST_ERROR : 
            return {
                ...state, 
                post: {
                    loading : false,
                    data : null,
                    error : action.error
                }
            }
            default:
                return state
    }
}








