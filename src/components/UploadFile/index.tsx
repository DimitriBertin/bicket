import style from './style.module.scss'
import { BsCamera } from 'react-icons/bs'
import { useRef } from 'react'
type Props = {
  id: string
}

export default function UploadFile({ id }: Props) {
  const file = useRef(null)
  return (
    <div className={style.block}>
      <label htmlFor={id} className={style.photo}>
        <input type="file" id={id} name="" className={style.input} ref={file} />
        <BsCamera />
      </label>
    </div>
  )
}
