import style from './style.module.scss'

type Props = {
  label: string
  handleClick: () => void
}

export default function SmallButton({ label, handleClick }: Props) {
  return (
    <button type="button" className={style.block} onClick={handleClick}>
      {label}
    </button>
  )
}
