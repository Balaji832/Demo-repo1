import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile'

function App() {
  const authentication=useSelector(state=>state.auth.Authentication);
  return (
    <React.Fragment>
      <Header></Header>
      {!authentication && <Auth></Auth>}
      {authentication && <UserProfile></UserProfile>}
      <Counter />
    </React.Fragment>
    
  );
}

export default App;
