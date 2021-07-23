import React from 'react'
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage">
            <h1>CHECK INSTAGRAM CLONE</h1>
            <h2>Non functional only styled</h2>
            <Link to="/Register" className="Linking">Register Page</Link>
            <br/>
            <Link to="/Login" className="Linking">Login Page</Link>
            <br/>
            <Link to="/direct/inbox" className="Linking">Messenger Page</Link>
            <br/>
            <Link to="/p/" className="Linking">Post demo Page</Link>
            <br/>
            <Link to="/Christopher" className="Linking">User Profile Page</Link>
            <br/>
        </div>
    )
}

export default Homepage
