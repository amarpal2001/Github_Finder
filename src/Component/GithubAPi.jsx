import React, { Component } from 'react'
import '../App.css';
import GithubProfile from './GithubProfile';
import axios from 'axios'
import { clientSecret, clientId } from './GithubCredential';
import GithubRepos from './GithubRepos';
import GithubProfileDetails from './GithubProfileDetails';

class GithubAPi extends Component {
    constructor(){
        super()
        this.state= {
            username: "",
            profile:null,
            repos:null
        }
    }    
    updateInput = (e) => {
        this.setState({
            ...this.state,
            username:e.target.value
        })
    };


    //form submission
    searchUser = (e) => {
        e.preventDefault();
        this.searchProfile()
        this.searchRepos();       
    };
    
    //search a profile
    searchProfile = () => {
        axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`)
        .then((res)=> {
            this.setState({
                profile:res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    //search Repos
    searchRepos = () => {
        axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientSecret=${clientSecret}`)
        .then((res)=> {
            this.setState({
                repos:res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }



    render() {
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white text-center">
                                    <h3 style={{fontFamily:"Nunito, sans-srif"}}>Github User Search</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline" onSubmit={this.searchUser}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" value={this.state.username} onChange={this.updateInput} placeholder='Search...' />
                                            <input type="submit"  value="search" className="btn btn-primary btn-sm mx-2"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.profile?
                            <GithubProfile profile={this.state.profile} username={this.props.username} />
                            :null
                            }
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos?
                            <GithubRepos repos={this.state.repos}/>
                            :null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default GithubAPi;


