import clsx from 'clsx'
import { useState } from 'react'
import style from './field.module.scss'

type Props = {
  type: string
  placeholder?: string
  label?: string
  id: string
  handleChange: (val: string) => void
  value?: string
}

export default function Field({ type, placeholder, id, handleChange, value, label }: Props) {
  const [isFill, setFill] = useState(false)
  const [val, setVal] = useState(value || '')

  const handleInputChange = (e) => {
    handleChange(e.target.value)
    setVal(e.target.value)
  }

  return (
    <div className={clsx(style.block, isFill && style.isFill, val !== '' && style.isFill)}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={handleInputChange}
        autoComplete="off"
        defaultValue={value}
        onFocus={() => setFill(true)}
        onBlur={() => setFill(false)}
      />
    </div>
  )
}
