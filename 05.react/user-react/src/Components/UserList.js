import React, { useEffect } from "react";
//{ users: [], age: '20'}
function User({user, onToggle, onRemove}) {
    useEffect(() => {
        console.log("화면에 나타남");
        return () => {
            console.log("화면에서 사라짐");
        }
    }, [])
    return(
        <li key={user.id}>
            <b onClick={()=> onToggle(user.id)} style={{color : user.active ? 'blue' : 'black'}} >이름 : {user.username} 이메일 : {user.email}</b> <button onClick={()=>onRemove(user.id)}>삭제</button>
        </li>
    )
}



//객제 구조분해 할당으로 App.js에 있는 props로 지정한 users를 받을 수 있다
//{ users: [], age: '20'}으로 바로 받을 수 있다. 
function UserList({users, onRemove, onToggle}){
    return(
        <div>
            <ul>
                {/* {users.map(user=>(
                    <li key={user.id}>
                        <b onClick={() => onToggle(user.id)} style={{ color: user.active ? 'blue' : 'black'}}>이름 : {user.username} 이메일 : {user.email}</b> <button onClick={()=> onRemove(user.id)}>삭제</button> 
                    </li> */}
                {users.map(user=>(//컴포넌트 사용 하는 방법 
                    <User user={user} onRemove={onRemove} onToggle={ontoggle} key={user.id}/>
                ))}
            </ul>
        </div>
    )
}

// UserList({props})//  로 할당 하는 것 보다 위와 같이 하는 것이 편하다. 
//     function UserList({props}){
//         const users =props.users;
//         const age = props.age;
//         //const {user, age} = props;
//         return(
//             <div>
//                 <ul>
//                     {props.map(user=>(
//                         <li> {user.username}</li>
//                     ))}
//                 </ul>
    
//             </div>
//         )

// }
export default UserList;