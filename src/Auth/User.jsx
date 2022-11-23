import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import '../Auth/User.css';


const User = () => {

  const {user,isAuthenticated,isLoading} = useAuth0()
  if(isLoading === true){
    return 
  }

  return (
    isAuthenticated && (
       <div className='m-2'>
       <img className='img' src={user.picture} alt={user.name}/><br />
            <span><b>{` Welcome, ${user.name}...`}</b></span>
        </div>
    )
  )
}

export default User