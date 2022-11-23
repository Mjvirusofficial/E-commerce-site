import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Login = () => {

  const {loginWithRedirect} = useAuth0();
  return <button className='login-btn' onClick={() => loginWithRedirect()}>Login</button>
}

export default Login;