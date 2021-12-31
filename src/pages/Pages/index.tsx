import ReturnButton from 'components/ReturnButton'
import style from 'styles/pages/pages.module.scss'

export default function Pages() {
  return (
    <div className={style.block}>
      <ReturnButton label="Page d'acceuil" url="/" />
      <h1 className={style.title}>Pages</h1>
    </div>
  )
}
