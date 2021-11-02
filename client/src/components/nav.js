import React, { useState } from 'react';

import { Link} from 'react-router-dom';

export default function Nav() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div id="nav-body">
            <h1>
                <Link to="/">고양이 분양 사이트: [이름]</Link>
            </h1>
            <ul>
                <li>
                    {isLogin ? "로그아웃" : <Link to="signIn"><button>로그인하기</button></Link> }
                </li>
                <li>
                    {isLogin ? null : <Link to="signUp"><button>회원가입</ button></Link> }
                </li>
            </ul>
        </div>
    )
}