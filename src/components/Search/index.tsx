import style from './style.module.scss'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import clsx from 'clsx'

type Props = {
  label: string
}

export default function Search({ label }: Props) {
  const [isFill, setIsFill] = useState(false)
  const [val, setVal] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={clsx(style.block, isFill && style.isFill, val !== '' && style.isFill)}>
      <form className={style.inner} onSubmit={handleSubmit}>
        <label htmlFor="search-input">{label}</label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          onChange={(e) => setVal(e.target.value)}
          onFocus={() => setIsFill(true)}
          onBlur={() => setIsFill(false)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  )
}
