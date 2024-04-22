import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


function Page404(){
    return (
        <>
        <div className="page">
            <h1>404</h1>
            <p>Page Not Found</p>
        </div>
        <Link to="/"><button className="btn back-home">Go Back to Home</button></Link>
        </>
    )
}

export default Page404;