import React, {useContext} from 'react'
import ctx from './context/AuthContext'

export default function UserMenu() {
    const { user, logIn, logOut} = useContext(ctx);

  return (
    <div>
    {user ? (
        <>
            <p>{user}</p>
            <button type='button' onClick={logOut}>Exit</button>
        </>
    ) : (
        <>
            <button type='button' onClick={logIn}>LogIn</button>
        </>
    )    
    }      
    </div>
  )
}
