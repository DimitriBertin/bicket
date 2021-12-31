import { ThemeContext } from 'contextes/themes'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import style from 'styles/pages/home.module.scss'

export default function Home() {
  const { state } = useContext(ThemeContext)
  console.log(state)
  return (
    <div className={style.block}>
      <div className={style.container}>
        <h1 className={style.title}>
          Welcome on board, <br />
          <Link to="/update-profile">Dimitri Bertin</Link>
        </h1>
      </div>
    </div>
  )
}
