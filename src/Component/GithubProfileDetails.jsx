import React, { Component } from 'react';
import { clientSecret, clientId } from './GithubCredential';
import axios from 'axios';




class GithubProfileDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             repos:""
        }
    }
    
    getRepos= (username) => {
        axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientSecret=${clientSecret}`)
        .then((res)=> {
            this.setState({
                repos:res.data
            })
        }).catch((err) => {
            console.log(err)
        })
        console.log("clicked")
    }

    render() {
        const {followers, following, public_repos, name, email, location, 
            blog, created_at, html_url, company } = this.props.profile;
        return (
            <>
                <div className="card">
                    <div className="card-header bg-dark">
                        <span className="badge badge-primary mx-2" style={{backgroundColor:"pink", color:'black'}}>{followers} Followers</span>
                        <span className="badge badge-success mx-2" style={{backgroundColor:"yellow", color:'black'}} onClick={this.getRepos}>{public_repos} Repos</span>
                        <span className="badge badge-danger mx-2" style={{backgroundColor:"cyan" , color:'black'}}>{following} Following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Name: {name}
                            </li>
                            <li className="list-group-item">
                                Location: {location}
                            </li>
                            <li className="list-group-item">
                                Email: {email}
                            </li>
                            <li className="list-group-item">
                                Company: {company}
                            </li>
                            <li className="list-group-item">
                                Blog: {blog}
                            </li>
                            <li className="list-group-item">
                                Member Since: {created_at}
                            </li>
                            <li className="list-group-item">
                                Profile URL: {html_url}
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default GithubProfileDetails
