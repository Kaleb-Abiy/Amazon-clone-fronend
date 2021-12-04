import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';



function App() {
  const [{}, dispatch]= useStateValue();
  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=> {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })

  }, []);
  
  return (
    
    <Router>
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<><Header /><Home /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<><Header />< Checkout/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
