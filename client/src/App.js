import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// pages
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';

//componets
import Nav from './components/nav';

function App() {

  return (
      <div className="App">
        {/* {isLogin ? "로그아웃" : <Link to="pages/signIn"><button>로그인하기</button></Link> } */}
        {/* {isLogin ? null : <Link to="pages/signUp"><button>회원가입</button></Link> } */}
        <Router>
          <Nav />
          <Switch>
            <Route path='/signIn'>
              <SignIn/>
            </Route>
            <Route path='/signUp'>
              <SignUp />
            </Route>
            <Route path='/' exact={true} path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
