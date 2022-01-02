import style from './style.module.scss'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Menu } from 'components'
import { useLocation } from 'react-router-dom'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Layout({ children }: Props) {
  const [isOpen, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div className={style.block}>
      <header>
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
          <Menu />
        </div>
      </header>
      <main className={style.container}>{children}</main>
      <button type="button" className={style.addButton}>
        +
      </button>
    </div>
  )
}
