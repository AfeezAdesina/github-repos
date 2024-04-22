import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Repos from "./Repos";


function BackToHome() { 
    return (
        <button className='btn'>Back to Home</button>
    )

}

function RepoDetails() {
    const [repo, setRepo] = useState([0]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.github.com/users/AfeezAdesina/repos/${id}`)
            .then(response => response.json())
            .then((repo) => {
                setRepo(repo);
                setLoading(true);
            })
            .catch(error => console.error(error))
    }, [id]);


    const Element = repo.map((users) => {
        return (
            <div key={repo.id} className='repo-card'>
                <h2 className='' >{users.name}</h2>
                <p className=''>{users.description}</p>
                <p className=''>{users.language}</p>
                <p>{users.created_at}</p>
                <p>{users.updated_at}</p>
                <p>{users.size}</p>
                <p>{users.stargazers_count}</p>
                <p>{users.watchers_count}</p>
                <p>{users.forks_count}</p>
                <p>{users.open_issues_count}</p>
                <p>{users.default_branch}</p>


            </div>
        );
    });
    return (
        <div>
            {Element}
            <Link to='/'>
                < BackToHome/></Link>
        </div>
    )
}

export default RepoDetails;