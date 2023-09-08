import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

//리덕스 모듈 합치기 combineReducers
const rootReducer = combineReducers({
    // counter : counter,
    counter, //이렇게 생략이 가능 하다(키에 있는 밸류와 이름둘 둘다 같아서 가능 하다.)
    // todos:todos
    todos
})
export default rootReducer