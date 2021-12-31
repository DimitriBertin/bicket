import { Link } from 'react-router-dom'
import style from './style.module.scss'
import { BsArrow90DegUp } from 'react-icons/bs'

type Props = {
  url: string
  label: string
}

export default function ReturnButton({ url, label }: Props) {
  return (
    <div className={style.block}>
      <Link to={url}>
        <BsArrow90DegUp />
        {label}
      </Link>
    </div>
  )
}
