//액션타입, 액션 생성 함수, 리듀서

//1.액션타입

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2. 액션 함수
//function setDiff(diff){
    //return {type:SEF_DIFF, diff: diff}
//} 가 밑에 setDFIF와 같이 대체 된다. 객체도 함수도 {}가 들어가서 헷갈리지 않기 위해 ()로 한번더 감싼다. =>은 function을 대신해서 사용 한다. 객체라는 것을 표현 하기 위해 () 사용

export const setDiff = diff => ({type : SET_DIFF, diff:diff})
export const increase = () => ({type : INCREASE});
export const decrease = () => ({type : DECREASE});

//초기 상태 
const initialState = {
    number : 0,
    diff : 1
}

//3. 리듀서 export로 내보내지만 default로 내보낸다.
export default function counter(state=initialState, action){
    switch(action.type){
        case SET_DIFF:
            return {
                ...state,
                diff : action.diff
            };
        case INCREASE:
            return{
                ...state,
                number : state.number + state.diff
            };
        case DECREASE: 
            return {
                ...state,
                number : state.number - state.diff
            }
        default:
            return state;
    }
}