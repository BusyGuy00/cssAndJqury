import React from "react";
function CreateUser({onChange, username, email, onCreate}){
    return(
        <div>
            <input placeholder="이름" name="username" value={username} onChange={onChange}/>
            <input  placeholder="이메일" name="email" value={email} onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )

}
export default CreateUser