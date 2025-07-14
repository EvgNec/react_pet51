import React, {useContext} from 'react'
import ctx from './context/AuthContext'

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    tag: {
      fontSize: 24,
      margin: `0 20px 0 0`,
    },
  };

export default function UserMenu() {
    const { user, logIn, logOut} = useContext(ctx);

    return (
        <div style={styles.container}>
          {user ? (
            <>
              <p style={styles.tag}>{user}</p>
              <button type="button" onClick={logOut}>
                LogOut
              </button>
            </>
          ) : (
            <button type="button" onClick={logIn}>
              LogIn
            </button>
          )}
        </div>
      );
    }
