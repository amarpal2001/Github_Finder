import React, { Component } from 'react'

class GithubRepos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repo:null
        }

    }
    
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header bg-light text-black">
                        <h3 style={{fontFamily:"Nunito, sans-serif"}}>Github Repos </h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                this.props.repos.map((repo) => {
                                    return (
                                        <li className='list-group-item'>
                                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                                        <span className="badge badge-success yellow_badge">{repo.stargazers_count}Stars</span>
                                        <span className="badge badge-warning green_badge" 
                                        >{repo.watchers_count}Watches</span>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default GithubRepos
