import React, { Component } from 'react'

class GithubProfileCard extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        let {name, avatar_url, bio, html_url} = this.props.profile;
        return (
            <div>
                <div className="card">
                    <img src={avatar_url} alt="avatar" className="img-fluid rounded-circle  py-2 mx-2"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>{bio}</p>
                        <a href={html_url} target="_blank" id='profile' className="btn btn-success btn-sm">Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default GithubProfileCard
