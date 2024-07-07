import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import NavBar from './navBar';

function Repos() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
  

    React.useEffect(() => {
        fetch('https://api.github.com/users/AfeezAdesina/repos')
            .then(response => response.json())
            .then(data => {
                setData([...data]);
                if (data) {
                    setLoading(true);
                } else {
                    setData([...data]);
                }
            })
            .catch(error => console.error(error))
    }, []);


    if (!loading) return <p>Loading...</p>;

    const userElement = data.map((repo) => {
        return (
            <div key={repo.id} className='repo-card'>
                <Link to={`/repo/${repo.name}`}> <h2 className='' >{repo.name}</h2> </Link>
                <p className=''>{repo.description}</p>
                {/* <p className=''>{repo.language}</p> */}
            </div>
        );
    });

    return (
        <div class="repo-header">
            <NavBar />
            {userElement}
            <div className="btn-head">
                <button className='btn'>1</button>
                <button className='btn' >2</button>
            </div>
        </div>
    )
}
export default Repos;