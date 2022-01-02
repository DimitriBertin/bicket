import { useState, useEffect, useContext } from 'react'
import Auth from 'pages/Auth'
import AppRoutes from './AppRoutes'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ActionName, ThemeContext } from 'contextes/themes'
import { BiLoaderAlt } from 'react-icons/bi'
import style from 'styles/pages/auth.module.scss'

function AuthDispatch() {
  const [isLoading, setLoading] = useState(true)

  const {
    dispatch,
    state: { isLogged },
  } = useContext(ThemeContext)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        dispatch({
          type: ActionName.UPDATE,
          payload: {
            isLogged: true,
            user: {
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL,
              displayName: user.displayName,
              phoneNumber: user.phoneNumber,
              emailVerified: user.emailVerified,
            },
          },
        })
      } else {
        // setLogged(false)
        dispatch({
          type: ActionName.LOGOUT,
        })
        navigate('/signin')
      }
      setLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <div className={style.block}>
        <BiLoaderAlt />
      </div>
    )
  }

  return isLogged ? <AppRoutes /> : <Auth />
}

export default AuthDispatch
