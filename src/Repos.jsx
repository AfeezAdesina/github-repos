import React from 'react';
import RepoDetails from './RepoDetails';
import './App.css';
import { Link } from 'react-router-dom';
import NavBar from './navBar';

function Repos() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  

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
                <p className=''>{repo.language}</p>
            </div>
        );
    });

    return (
        <div>
            <NavBar />
            {userElement}
            <div className="btn-head">
                <button className='btn'>{currentPage}</button>
                <button className='btn' >2</button>
            </div>
        </div>
    )
}
export default Repos;