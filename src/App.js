import React, { useEffect } from 'react';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is Logged in dispatch login
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
          
          })
        );

      } else {
        // The user is Logged Out
        dispatch(logout());
      }
    })
    
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? ( < Login /> ) : (
      <div className="app__body">
        <Sidebar/>
        < Feed />
        < Widgets />
     </div>
     
       ) }
     
     

    </div>
  );
}

export default App;
