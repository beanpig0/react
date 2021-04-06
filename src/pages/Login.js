import React, {useState, useEffect} from 'react';
import {firebaseApp} from '../firebase';
import { ButtonPrimary } from '../component/Button';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  
  const login = () => {
    console.log('a');
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
  // firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const uid = (firebaseApp.auth().currentUser || {}).uid
      if(uid){
        setLoginStatus(true);
        setEmail("");
        setPassword("");
        alert('login');
      }else{
        alert('error');
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      if(errorCode === "auth/user-not-found"){
        alert('가입하세요');
      }
    })
  }

  const logout = () => {
    firebaseApp.auth().signOut();
    setLoginStatus(false);
  }

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      const uid = (firebaseApp.auth().currentUser || {}).uid
      if(uid){
        setLoginStatus(true);
        alert('a');
        // history.push('/chat');
      }else{
      }
    })
  },[])

  return(
    <>
    {
      loginStatus ?
      <>
        <button className="btn btn-success" onClick={evt => logout()}>logout</button>
      </>
      :
      <>
        <h2 className="screen_out">로그인</h2>
        <div className="wrap_login">
          <div className="box_login">
            <input
              onChange={evt => {setEmail(evt.target.value)}}
              className="inp_g"
              placeholder="이메일"
              value={email} />
            <input
              onChange={evt => {setPassword(evt.target.value)}}
              className="inp_g"
              placeholder="비밀번호"
              value={password}
            />
            <div className="wrap_btn">
            <ButtonPrimary txt="Login" onClick={evt => {login()}} />
            </div>
          </div>
        </div>
      </>
    }
    </>
  ) 
}

export default Login;