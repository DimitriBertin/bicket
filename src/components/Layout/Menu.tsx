import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import style from './menu.module.scss'
import { MenuList } from 'components'

export default function Menu() {
  const [isOpen, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav className={style.block}>
      <button
        type="button"
        className={clsx(style.menuButton, isOpen && style.isClose)}
        onClick={() => setOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={clsx(style.menu, isOpen && style.isOpen)}>
        <MenuList />
      </div>
    </nav>
  )
}
