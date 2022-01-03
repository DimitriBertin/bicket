import { SubmitButton, UploadFile } from 'components'
import ReturnButton from 'components/ReturnButton'
import { ThemeContext } from 'contextes/themes'
import { useContext, useState } from 'react'
import style from 'styles/pages/profile.module.scss'
import { setRoleView } from 'services/users'

export default function Profile() {
  const {
    state: { user },
  } = useContext(ThemeContext)

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirm: '',
    displayName: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className={style.block}>
      <ReturnButton label="Page d'acceuil" url="/" />
      <h1 className={style.title}>Profil</h1>
      <div className={style.head}>
        <p className={style.displayName}>{user.displayName}</p>
        <p className={style.role}>{setRoleView(user.role)}</p>
        {user.role !== 'A' && (
          <button type="button" className={style.smallButton}>
            Demander plus de permission
          </button>
        )}
      </div>
      <div className={style.wrapper}>
        <form onSubmit={handleSubmit}>
          {/* FILE UPLOAD COMPONENT */}
          <UploadFile />
          <SubmitButton align="center">Modifier mon profil</SubmitButton>
        </form>
      </div>
    </div>
  )
}
