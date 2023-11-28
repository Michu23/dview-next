import React from 'react'
import axios from 'axios'


const Auth = () => {


    const [token, setToken] = React.useState('');
    const [accessToken, setAccessToken] = React.useState('');

    const handleGoogleLogin = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/google', {
            token: accessToken,
          });
      
          console.log(response);
          
          // Store the access token in context for later use
          setAccessToken(response.data.access_token);
      
          console.log('Authentication successful:', response.data);
        } catch (error) {
          console.error('Authentication failed:', error.response.data);
        }
      };



  return (
    <div className="container-fluid">
        <div className="container">
        <div className='mt-10 p-5'>
        <button className="button mt-5 py-3"
            onClick={() => {
                handleGoogleLogin();
            }
            }
        >
           Google Sign in
        </button>
    </div>
        </div>
    </div>
  )
}

export default Auth