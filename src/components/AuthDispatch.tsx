import { useState, useEffect, useContext } from 'react'
import Auth from 'pages/Auth'
import AppRoutes from './AppRoutes'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ActionName, ThemeContext } from 'contextes/themes'
import { BiLoaderAlt } from 'react-icons/bi'
import style from 'styles/pages/auth.module.scss'
import { getUser } from 'services/users'

function AuthDispatch() {
  const [isLoading, setLoading] = useState(true)
  const {
    dispatch,
    state: { isLogged },
  } = useContext(ThemeContext)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, async (user) => {
      setLoading(false)
      if (user) {
        const dataUser = await getUser(user.uid)
        dispatch({
          type: ActionName.UPDATE,
          payload: {
            isLogged: true,
            user: {
              uid: user.uid,
              email: user.email,
              emailVerified: user.emailVerified,
              photoURL: user.photoURL,
              displayName: user.displayName,
              name: dataUser.name,
              lastname: dataUser.lastname,
              role: dataUser.role,
              date: dataUser.date,
            },
          },
        })
      } else {
        navigate('/signin')
      }
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
