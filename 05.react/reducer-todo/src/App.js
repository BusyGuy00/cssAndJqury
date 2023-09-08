import { useReducer, useRef } from 'react';
import './App.css';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
//초기상태값
const initalState = {
  inputs: {
      username: '',
      email: ''
  },
  users : [
      {
          id:1,
          username : 'green',
          email : 'green@naver.com',
          active: false
      },
      {
          id:2,
          username : 'blue',
          email : 'blue@naver.com',
          active: false
      },
      {
          id:3,
          username : 'red',
          email : 'red@naver.com',
          active: false
      }
  ]
}
//reducer함수
function reducer(state, action){
  switch(action.type){
    case 'INPUTCHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name] : action.value //변수를 key값으로 쓸떄는 []를 사용해야 한다
        }
      }
    case 'CREATEUSER': 
    return {
      //inputs초기화
      inputs: initalState.inputs,
      //inputs: {
        //username: "",
        //email: ""
      //},
      //이거랑 같은 거다.
      users: [
        ...state.users,
        action.user  //action.user 을 추가 한다
      ]
    }
    case 'USERREMOVE':
      //user의 id와 액션 객체가 가지고 있는 id와 비교해서 
      //다를 때 user를 리턴 [{id:1}, {id:2}, {id:3}]  ==> [{id:1}, {id:3}] 만 리턴
      return{
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
      case 'USERTOGGLE':
        return {
          ...state,
          //state.users.는 배열이고 배열은 map을 사용하여 담을 수있다 user가 가진 id와 action을 비교 한다
          //(...user는 원본을 유지 하기 위해서 map에 담긴 배열을 펼치고 비교한다.)active를 비교 하고 false인 것만 변경해서 리턴
          //같지 않다면 원래 대로 리턴
          users: state.users.map(user=> user.id === action.id ? 
            {...user,active: !user.active} : user)
        }
      default:
        return state;
  }
   
}
function App() {
  const [state, dispath] = useReducer(reducer, initalState);
  const {users} = state;
  //1. 인풋의 값이 변경되면 inputs의 값을 변경
  const {username, email} = state.inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    dispath({
      type: "INPUTCHANGE",
      name: name,
      value: value
    })
  }
  //2.등록버튼 클릭시 users배열에 항목 추가
  //id번호 필요하다. 
  const nextId = useRef(4);
  const onCreate = () => {
    //reduce 호출 (액션객체전달)
    dispath({
      type: "CREATEUSER",
      user: {
        id: nextId.current,
        username: username,
        email: email,
        active: false
      }
    })
    //nextId값을 1씩 더해라
    nextId.current += 1;
  }
  //3. 삭제 버튼 클릭시 users배열에서 해당 user 제거
  //filter에서 사용할 id를 전달, type: 삭제 전달
  const onRemove = (id) => {
    dispath({
      type: 'USERREMOVE',
      id: id
    })
  }
  //4.유저 항목 클릭시 유저의 active를 반전 true -> false, false-> true
  //id전달 
  const onToggle = (id) => {
    dispath({
      type : 'USERTOGGLE',
      id: id
    })
  }
  return (
    <div className="App">
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;