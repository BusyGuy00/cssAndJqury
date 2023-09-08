//3가지 컨텍스트 내보내기 
//Stata를 조회할 수 있는 함수 내보내기
//dispatch를 쉽게 사용할 수 있는 함수 내보내기 
//2가지들의 Poovider로 감싸는 컴포넌트 내보내기 

import axios from "axios";
import { createContext, useContext, useReducer } from "react";

//기본상태
const initialState = {
    loading : false,
    data : null,
    error : null
}
//리듀서 
function reducer(state,action){
    switch(action.type){
        case "LOADING" : 
        return{
            loading : true,
            data : null,
            error : null
            };
        case "SUCCESS" :
        return{
            loading : false,
            data : action.data,
            error : null

            };
        case "error":
        return{
            loading : false,
            data :null,
            error : action.error
            };
        default:
            return state;
    }
}
export async function getUsers(dispatch){
    dispatch({type:"LOADING"});
    try{
        const response = await axios.get("http://localhost:8010/cars");
        console.log(response);
        dispatch({type:"SUCCESS", data : response.data})
    }
    catch(e){
        dispatch({type:"ERROR", error: e});

    }
}
//State context , Dispatch context 생성할 계획 
const UsersStateContext = createContext(null); // 이걸 통해서 state를 전달
const UsersDispatchContext = createContext(null); // 이걸 통해서 dispatch를 전달 

// 위에서 선언한 context들의 provider로 감싸는 컴포넌트 
//function을 사용 하고 싶은 경우 export를 사용해 내보내기 하면 된다
export function UsersProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {/* Users 컴포넌트 */}
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    )
}
//State조회 하기
export function useUsesState(){
    const state = useContext(UsersStateContext)
    if(!state){
        return;
    }
    return state;
} 
//Dispatch를 쉽게 사용할 수 있도록 내보내기 
export function useUsersDispatch(){
    const dispatch = useContext(UsersDispatchContext);
    if(!dispatch){
        return;
    }
    return dispatch;
}

