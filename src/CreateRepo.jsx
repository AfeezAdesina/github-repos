import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function CreateRepo() {
    return (
        <>
        <div className='create-panel'>
            <h1>Create a new repository</h1>    
            <form action="/" method="post" className='search-area'>
                <input type="text" name="search" placeholder="Repository name" />
                <input type="text" name="search" placeholder="Description" />
                <input type="text" name="search" placeholder="Public" />
                <button type="submit" className='btn'>Create repository</button>
                </form>
        </div>
        <Link to="/"><button className="btn back-home">Go Back to Home</button></Link>
        </>
    )
}

export default CreateRepo;