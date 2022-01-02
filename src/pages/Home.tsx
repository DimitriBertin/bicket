import { Menu } from 'components'
import { ThemeContext } from 'contextes/themes'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import style from 'styles/pages/home.module.scss'

export default function Home() {
  const {
    state: { user },
  } = useContext(ThemeContext)
  return (
    <div className={style.block}>
      <h1 className={style.title}>
        Welcome on board, <br />
        <Link to="/profile">{user.displayName}</Link>
      </h1>
      <p className={style.description}>
        Vous êtes connecté, vous pouvez ajouter des <b>collaborateurs</b> pour vous aider dans votre tâche. Vous pouvez
        également ajouter de nouvelles <b>briques</b> pour les assembler et créer de nouvelles <b>pages</b>.
        N&apos;oublier pas de gérer vos paramètres également. <br />
        Bonne navigation !
      </p>
      <div className={style.menu}>
        <Menu />
      </div>
    </div>
  )
}
