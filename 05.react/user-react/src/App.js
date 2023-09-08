import { useEffect, useRef, useState } from 'react';
import './App.css';
import UserList from './Components/UserList';
import CreateUser from './Components/CreateUser';

function App() {
  //유저 항목을 나타내는 앱 
  const [users, setUsers] = useState([ 
    {
      id : 1,
      username: 'green',
      email : 'green@naver.com',
      active : false
    },
    {
      id : 2,
      username: 'blue',
      email : 'blue@naver.com',
      active : false
    },
    {
      id : 3,
      username: 'yellow',
      email : 'yellow@naver.com',
      active : false
    }
  ]);
  //인풋 입력값을 상태관리
  const [inputs, setInputs] = useState({
    username : "",
    email : ""
  });
  const {username, email}= inputs;
  const onChange = e => { // 화면이 리렌더링 되면 값이 변경 된며 target는 이벤트를 일으킨 input을 한다
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]: value

    })
  }
  const nextId = useRef(4);
  const onCreate = () => {
    //users배열에 객체를 추가하기
    setUsers([
      ...users, //users의 위의 배열을 뿌려주는 방법
     //{ id : 4, username : "이름", email: "이메일"} // 이방법은 값이 유지가 안돼고 변수가 아니여서 추가가 안된다 그래서 ref값으로 만들것이다.
      {id: nextId.current, username : username, email: email, active: false}
    ])
    setInputs({ //초기화 시키기
      username:"",
      email:""
    })
    nextId.current += 1;
  }
  //삭제 부분
    const onRemove = (id) =>{
      setUsers(users.filter(user => user.id !==id))
    }
    const onToggle = (id) => {
      setUsers(users.map(user => user.id === id? 
        {...user, active: !user.active} : user))
    }
    useEffect(()=>{
      console.log("랜더링 되었습니다.")
    },[])
  return (
    <div className="App">
      {/* {users : [] props.users} props로 값 전달 받기 */}
      {/* {users:[], age: '20'} */}
      {/* { onChange=f, username="", email="", onCreate=fuction(함수)} 이러한 props가 전달 되게 한다. */}
      <CreateUser 
      onChange={onChange} 
      username={username} 
      email={email} 
      onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
