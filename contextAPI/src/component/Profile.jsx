import React , {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const {user} = useContext(UserContext);
  if(!user) return <div>Please Login</div>
  else return(
    <>
        <h1>Welcome {user.uname}</h1>
    </>
  )
}

export default Profile