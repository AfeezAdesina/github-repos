import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './App.css';


function BackToHome() {
    return (
        <button className='btn'>Back to Home</button>
    )

}

const RepoDetails = () => {
    const [repo, setRepo] = useState(null);
    const { repoName } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const repoUrl = "https://api.github.com/repos/AfeezAdesina";
                const repoEndPoint = `${repoUrl}/${repoName}`;

                const response = await fetch(repoEndPoint);
                const data = await response.json();
                setRepo(data);
            } catch (error) {
                const errorMessage = error.message;
            }
        })();
    }, [repoName]);

    if (!repo) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <div className="">
                <h2 className="">{repo.name}</h2>
                <p> <b>Language:</b> {repo.language}</p>
                <p> <b>Stars:</b> {repo.stargazers_count}</p>
                <p> <b>Forks:</b> {repo.forks_count}</p>
                <p> <b>Open Issues:</b> {repo.open_issues_count}</p>
                <p> <b>Watchers:</b> {repo.watchers_count}</p>
                <p> <b>Created at:</b> {repo.created_at}</p>
                <p> <b>Updated at:</b> {repo.updated_at}</p>
                <p> <b>Pushed at:</b> {repo.pushed_at}</p>
                <div className="three-btn">
                <Link to='/'>
                < BackToHome/></Link>
                    <a href={repo.html_url} target="_blank" rel="">
                        <button className="btn">View on GitHub</button>
                    </a>
                    <a href={repo.homepage} target="_blank" rel="">
                        <button className="btn">View Live</button>
                    </a>
                </div>
            </div>

        </>
    );
};

export default RepoDetails;