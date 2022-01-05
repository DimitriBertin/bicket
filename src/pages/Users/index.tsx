import ReturnButton from 'components/ReturnButton'
import { Link } from 'react-router-dom'
import { getListUsers } from 'services/users'
import style from 'styles/pages/pages.module.scss'

export default function Users() {
  getListUsers()
  return (
    <div className={style.block}>
      <ReturnButton label="Page d'acceuil" url="/" />
      <h1 className={style.title}>Collaborateurs</h1>
      <Link to="/collaborateur/add" className={style.addBtn}>
        + Ajouter un collaborateur
      </Link>
      {/* Rechercher */}
    </div>
  )
}
