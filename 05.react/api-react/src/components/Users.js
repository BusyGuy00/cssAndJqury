
import React, { useEffect } from 'react'; //useState 삭제 했다
import { getUsers, useUsersDispatch, useUsesState } from '../UserContext';
// import useAsync from '../useAsync';//USerCOntext.js에서 사용 하기 때문에 필요가 없어졌다
// import axios from 'axios';//USerCOntext.js에서 사용 하기 때문에 필요가 없어졌다

//=user reducer로 바꾸기 =
// function reducer(state,action){
//     switch(action.type){
//         case 'LOADING':
//             return {
//                 loading : true,
//                 user: null,
//                 error: null
//             };
//         case 'SUCCESS':
//             return {
//                 loading : false,
//                 users: action.data,
//                 error : null
//             };
//         case 'ERROR':
//             return{
//                 loading: false,
//                 users: null,
//                 error: action.error
//             };
//         default:
//             return state;
//     }
// }
// async function getUsers() { //USerCOntext.js에서 사용 하기 때문에 필요가 없어졌다
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     return response.data;
// }
function Users(props) {
    //상태를 생성 users, loading, error
    //========================================
    //user reducer로 관리 해서 필요 없어 졌다
    // const [users, setUsers] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error,setError] = useState(null);
    //========================================
    //useEffect(() => {
        //axios 요청
    //     const [state,dispatch] = useReducer(reducer,{
    //         loading: false,
    //         users: null,
    //         error: null
    //     })
    //     const fetchUsers = async () => {
    //         try{
    //             //요청 시작 -> error와 users는 null초기화 시켜 줘야 한다.
    //             //loading은 true
    //              //========================================
    //              //user reducer로 관리 해서 필요 없어 졌다
    //             // setUsers(null);
    //             // setError(null);
    //             // setLoading(true); //loading 값을 true로 변경 했다
    //              //========================================
    //             //get() 부분에 받아올 서버 주소를 입력해준다.
                
    //             // 로딩을 true로 해줘
    //             dispatch({type:'LOADING'})
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //             //response.data안에 데이터가 들어가 있다. 
    //             //요청 성공 받아온 데이터를 users에 담기
    //              //user reducer로 관리 해서 필요 없어 졌다
    //             //setUsers(response.data);
    //             dispatch({type:'SUCCESS', data: response.data});
    //         }
    //         catch(e){
    //              //user reducer로 관리 해서 필요 없어 졌다
    //             //setError(e);
    //             dispatch({type:'ERROR',error: e})
    //         }
    //         //try,catch가 끝났다는건 로딩이 끝났다는 것이다.
    //          //user reducer로 관리 해서 필요 없어 졌다
    //         //setLoading(false);
    //     }
    //     useEffect(() => {
    //     //함수호출
    //     fetchUsers();
    // },[])
    //getUsers를 호출하여 axios를 호출 받는다
    // const [state, refetch ] = useAsync(getUsers);// [state, fetchData함수 ]로 useAsync.js의 배열을 받는다 //USerCOntext.js에서 사용 하기 때문에 필요가 없어졌다
    // const {loading,error,users}= state;//USerCOntext.js에서 사용 하기 때문에 필요가 없어졌다

    //USerCOntext.js의 필요로 다 지운 후에 추가 

    //상태를 리턴 한다. useContext(UsersStateContext)
    const state = useUsesState();
    //duspatch를 리턴 useContext(UserDispatchContext)
    const dispatch = useUsersDispatch();
    //{loading : false, error: null, data: null}
    const {loading, error, data} = state;
    const refetch = () => {
        getUsers(dispatch);
    }
    useEffect(() => {
        getUsers(dispatch);
    }, []);
    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러가 발생 했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div> //users부분 data로 바꿨다
    return (
        <div>
            <ul>
                {data.map(user=>(
                    <li key={user.id}>
                        {user.brand} ({user.model})
                    </li>
                ))}
            </ul>
            {/* 다시 불러 오기 버튼은  getUsers을 불러 온다. */}
            <button onClick={refetch}>다시 불러 오기</button> 
        </div>
    );
}

export default Users;