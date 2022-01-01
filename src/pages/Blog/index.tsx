import ReturnButton from 'components/ReturnButton'
import style from 'styles/pages/pages.module.scss'

export default function Blog() {
  return (
    <div className={style.block}>
      <ReturnButton label="Page d'acceuil" url="/" />
      <h1 className={style.title}>Blog</h1>
    </div>
  )
}
