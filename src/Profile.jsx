import React, {useState} from 'react'
import DisplayTable from './DisplayTable';
import Navbar from './Component/Navbar';

const Profile = () => {

    const [data, setData] = useState({})
    const [username, setUsername] = useState("")
    const [repositories, setRepositories] = useState([])

    const changeHandler = (e) => {
        setUsername(e.target.value)
    }

    const submitHandler = async e => {
        e.preventDefault() 
        
        const profile = await fetch(`https://api.github.com/users/${username}`)
        const profileJson = await profile.json()
        // console.log(profileJson)

        const repositories = await fetch(profileJson.repos_url)
        const repoJson =  await repositories.json()
        // console.log(repoJson)
        if (profileJson) {
            setData(profileJson)
            setRepositories(repoJson)
        }
    }

    return (
        <>
            <Navbar/>
            <div className="Search">
               <span>Github Finder</span><br/>
                <input type="text" placeholder="search_profile" value={username} onChange={changeHandler}/>
                <button type="submit" className="button" onClick={submitHandler}>Search</button>
            </div>
                    <br/><br/><br/>
            <DisplayTable data={data} repositories={repositories}/>
        </>
    )
}

export default Profile;
