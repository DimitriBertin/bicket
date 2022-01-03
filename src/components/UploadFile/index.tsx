import style from './style.module.scss'
import { BsCamera } from 'react-icons/bs'
import { useRef } from 'react'

export default function UploadFile() {
  const file = useRef(null)
  return (
    <div className={style.block}>
      <div className={style.photo}>
        <input type="file" name="" className={style.input} ref={file} />
        <BsCamera />
      </div>
    </div>
  )
}
