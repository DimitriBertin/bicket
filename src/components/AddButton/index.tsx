import { Link } from 'react-router-dom'
import style from './style.module.scss'

type Props = {
  label: string
  url: string
}

export default function AddButton({ url, label }: Props) {
  return (
    <Link to={url} className={style.button}>
      {label}
    </Link>
  )
}
