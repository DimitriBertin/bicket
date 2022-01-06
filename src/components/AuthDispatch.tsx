import { useState, useEffect, useContext } from 'react'
import Auth from 'pages/Auth'
import AppRoutes from './AppRoutes'
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

  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const dataUser = await getUser(user.uid)
        dispatch({
          type: ActionName.UPDATE,
          payload: {
            isLogged: true,
            user: {
              uid: user.uid,
              email: dataUser.email,
              avatar: dataUser.avatar,
              displayName: dataUser.displayName,
              name: dataUser.name,
              lastname: dataUser.lastname,
              role: dataUser.role,
              date: dataUser.date,
              phone: dataUser.phone,
            },
          },
        })
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
