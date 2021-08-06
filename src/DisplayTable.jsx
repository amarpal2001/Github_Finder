import React from 'react'

const DisplayTable = ({data, repositories}) => {
    return (
        <div>
            <table class="table">
                <thead> 
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Location</th>
                        <th scope="col">Bio</th>
                        <th scope="col">Repos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>{!data.avatar_url? "": (<img style={{height:"10vh", width:'5vw', borderRadius:"50%"}} src={data.avatar_url} alt={data.avatar_url}/>)}</td>
                        <td>{data.location}</td>
                        <td>{data.bio}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTable
