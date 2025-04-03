import React from "react";

const Child = ({setIsLoggedIn}) => {
    function handleSubmit(e){
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
            /><br/>
            <input
                type="password"
            /><br/>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Child;