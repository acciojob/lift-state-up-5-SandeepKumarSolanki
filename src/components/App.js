
import React, { useState } from "react";
import './../styles/App.css';
import Child from "../Component/Child";

const App = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <div>
        <h1>Parent Component</h1>
        {
          isLoggedIn === false ? (
            <Child setIsLoggedIn={setIsLoggedIn}/>
          )
          :
          (
            <p>You are logged in!</p>
          )
        }

        {/* {
          setIsLoggedIn && (
            <p>You are logged in!</p>
          )
        } */}
    </div>
  )
}

export default App
