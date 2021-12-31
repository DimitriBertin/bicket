import ReturnButton from 'components/ReturnButton'
import style from 'styles/pages/pages.module.scss'

export default function Profile() {
  return (
    <div className={style.block}>
      <ReturnButton label="Page d'acceuil" url="/" />
      <h1 className={style.title}>Profile</h1>
    </div>
  )
}
