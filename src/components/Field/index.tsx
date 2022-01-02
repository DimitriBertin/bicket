import style from './field.module.scss'

type Props = {
  type: string
  placeholder: string
  id: string
  handleChange: (val: string) => void
  value?: string
}

export default function Field({ type, placeholder, id, handleChange, value }: Props) {
  return (
    <div className={style.block}>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={(e) => handleChange(e.target.value)}
        autoComplete="off"
        defaultValue={value}
      />
    </div>
  )
}
