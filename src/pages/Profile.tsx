import { FormProfil } from 'components'
import ReturnButton from 'components/ReturnButton'
import { ThemeContext } from 'contextes/themes'
import { useContext } from 'react'
import style from 'styles/pages/profile.module.scss'
import { setRoleView } from 'services/users'

export default function Profile() {
  const {
    state: { user },
  } = useContext(ThemeContext)

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
        <FormProfil />
      </div>
    </div>
  )
}
