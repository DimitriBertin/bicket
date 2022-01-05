import style from './style.module.scss'
import Menu from './Menu'
import Notification from './Notification'
import { AiOutlineLogout } from 'react-icons/ai'
import { getAuth, signOut } from 'firebase/auth'
import { useContext } from 'react'
import { ActionName, ThemeContext } from 'contextes/themes'
import { useNavigate } from 'react-router-dom'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Layout({ children }: Props) {
  const { dispatch } = useContext(ThemeContext)
  const navigate = useNavigate()
  const handLogout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        dispatch({
          type: ActionName.LOGOUT,
        })
        navigate('/signin')
      })
      .catch((e) => {
        console.log(`Something wrong ---->`, e)
      })
  }

  return (
    <div className={style.block}>
      <header className={style.header}>
        <Menu />
        <div className={style.headerRight}>
          <Notification />
          <button type="button" className={style.logout} onClick={handLogout}>
            <AiOutlineLogout />
            <span>GoodBye.</span>
          </button>
        </div>
      </header>
      <main className={style.container}>{children}</main>
      <button type="button" className={style.addButton}>
        +
      </button>
    </div>
  )
}
