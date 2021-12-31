import { Field, SubmitButton } from 'components'
import { Link } from 'react-router-dom'
import style from 'styles/pages/login.module.scss'

export default function Forgot() {
  return (
    <div className={style.block}>
      <div className={style.container}>
        <h1 className={style.title}>Mot de passe oublié ?</h1>
        <form className={style.form} autoComplete="off">
          <Field type="text" id="login-email" placeholder="Votre email" handleChange={(val) => console.log(val)} />
          <SubmitButton>Nouveau mot de passe</SubmitButton>
          <div className={style.forgot}>
            <Link to="/signin" className={style.link}>
              Je souhaite me connecter
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
