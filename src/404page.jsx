import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import R from "./assets/R.png";


function Page404() {
    return (
        <>
            <div className="page-head">
                <div>
                    <img src={R} alt="logo-error" class="p-404p"/>
                    <p style={{color:"red", fontSize:"50px", fontWeight:"bolder"}}>Page Not Found</p>
                </div>
                <Link to="/"><button className="btn back-home">Go Back to Home</button></Link>
            </div>
        </>
    )
}

export default Page404;