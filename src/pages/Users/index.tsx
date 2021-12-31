import ReturnButton from 'components/ReturnButton'
import style from 'styles/pages/pages.module.scss'

export default function Users() {
  return (
    <div className={style.block}>
      <ReturnButton label="Page d'acceuil" url="/" />
      <h1 className={style.title}>Collaborateurs</h1>
    </div>
  )
}
