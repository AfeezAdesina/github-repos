import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import R from "./assets/R.png";


function Page404() {
    return (
        <>
            <div className="page-head">
                <div className="page">
                    <img src={R} alt="logo-error" />
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
                <Link to="/"><button className="btn back-home">Go Back to Home</button></Link>
            </div>
        </>
    )
}

export default Page404;