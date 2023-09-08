//이렇게 생긴 것이 원래의 미들 웨어 
// function myLogger(store){
//     return function(next){
//         return function(action){
//             //하고 싶은 작업
//         }
//     }
// }

//위의 미들웨어 양식을 화살표 함수로 변경 했다.
const myLogger = store => next => action => {
    //액션을 출력
    console.log(action);
    //다음 미들웨어 또는 리듀서에게 앤션을 전달 (하고 싶은 작업)
    const result = next (action);
    //반환하는 값은 dispatch(action)결과물이 된다. 
    console.log(store.getState());
    return result;
}
export default myLogger;