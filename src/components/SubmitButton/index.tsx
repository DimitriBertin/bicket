import style from './button.module.scss'
import clsx from 'clsx'

type Props = {
  children: React.ReactChild
  align?: string
}

export default function SubmitButton({ children, align }: Props) {
  return (
    <div className={clsx(style.block, align === 'right' && style.end, align === 'center' && style.middle)}>
      <button type="submit" className={style.button}>
        {children}
      </button>
    </div>
  )
}
