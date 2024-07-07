import React from 'react';
import './App.css';
import { useRef } from 'react';


function NavBar() {
    const [search, setSearch] = React.useState('');

    const handleChange = (e) => { 
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search);
    }


    return (
        <div className='search-sec'>
            <h1>Afeez GitHub Repository</h1>
            <form action="/" method="post" className='search-area2'>
                <input type="text" name="search" placeholder="Search..." />
                <button  className="search" type="submit" onClick={handleChange}>Search</button>
            </form>
        </div>
    )
}

export default NavBar;