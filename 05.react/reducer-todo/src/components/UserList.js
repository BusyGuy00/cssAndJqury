import React from 'react';

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user=> (
                <div>
                    <span style={{color:user.active ? 'red' : 'black'}}
                   onClick={()=> onToggle(user.id)}>
                        이름 : {user.username}
                        이메일 : {user.email}
                    </span>
                    {/* //파라미터값을 받와야 하는 경우 =>을 통해 처리 해야 한다 */}
                    <button onClick={ () => onRemove (user.id)}>삭제</button>  
                </div>
            ))}
        </div>
    );
}

export default UserList;