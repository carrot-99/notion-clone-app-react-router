import React from 'react'
import { useState } from 'react'


const Login = () => {
  const [userName, setUserName] = useState("");
  const [addUserName, setAddUserName] = useState("");
  const [password, setPassword] = useState("");
  const [addPassword, setAddPassword] = useState("");

  const onClickAddUserName = () => {
    setAddUserName(userName);
    setUserName("");
  }

  const onClickAddPassword = () => {
    setAddPassword(password);
    setPassword("");
  }

  return (
    <>
      <div className="login">
        <input 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
        />
        <button onClick={onClickAddUserName}>追加</button>
        <p>ユーザー名：{userName}</p>
        <p>ユーザー名：{addUserName}</p>
        <input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={onClickAddPassword}>追加</button>
        <p>パスワード：{password}</p>
        <p>パスワード：{addPassword}</p>
      </div>
    </>
  )
}

export default Login