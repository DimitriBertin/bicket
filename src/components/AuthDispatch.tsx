import { useState, useEffect, useContext } from 'react'
import Auth from 'pages/Auth'
import AppRoutes from './AppRoutes'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ActionName, ThemeContext } from 'contextes/themes'
import { BiLoaderAlt } from 'react-icons/bi'
import style from 'styles/auth.module.scss'

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
        dispatch({
          type: ActionName.UPDATE,
          payload: {
            isLogged: true,
            user,
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
