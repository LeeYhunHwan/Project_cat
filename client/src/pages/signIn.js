import axios from "axios";
import React from 'react';

import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';



export default function SignIn() {
    return (
        <div className="login-container">
            <form className="login-form">
                <label for="login-id">아이디</label>
                <input id="login-id" type="text" placeholder="아이디를 입력하세요" />
                <label for="login-password">패스워드</label>
                <input id="login-password" type="password" placeholder="비밀번호를 입력하세요" />
                <button type="submit" className="login-container-">로그인하기</button>
                <Link to="../signUp"><div>회원가입하기</div></Link>
            </form>
        </div>
    )
}
