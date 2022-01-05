import { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import style from './notification.module.scss'

export default function Notification() {
  const [isOpenNotification, setOpenNotification] = useState(false)

  return (
    <div className={style.block}>
      <button type="button" className={style.button}>
        <IoIosNotificationsOutline />
      </button>
    </div>
  )
}
