import { AddButton, ReturnButton, Search } from 'components'
import { useCallback, useEffect, useState } from 'react'
import { getListUsers, setRoleView } from 'services/users'
import style from 'styles/pages/pages.module.scss'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      const listUsers = await getListUsers()
      if (listUsers) {
        setUsers(listUsers)
      }
    }

    getData()
  }, [])

  return (
    <div className={style.block}>
      <ReturnButton label="Page d'acceuil" url="/" />
      <div className={style.head}>
        <h1 className={style.title}>Collaborateurs</h1>
        <AddButton label="Ajouter un collaborateur" url="/users/add" />
      </div>
      <Search label="Rechercher un collaborateur" />
      <ul className={style.list}>
        {users.map((user) => (
          <li className={style.user} key={user.uid}>
            <span className={style.avatar}>{user.photoURL}</span>
            <span className={style.displayName}>{user.displayName}</span>
            <span className={style.email}>{user.email}</span>
            <span className={style.role}>{setRoleView(user.role)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
