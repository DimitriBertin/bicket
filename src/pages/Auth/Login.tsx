import { Field, SubmitButton } from 'components'
import { Link } from 'react-router-dom'
import style from 'styles/login.module.scss'

export default function Login() {
  return (
    <div className={style.block}>
      <div className={style.container}>
        <h1 className={style.title}>
          Connectez vous,
          <span> pour gérer votre site web.</span>
        </h1>
        <form className={style.form} autoComplete="off">
          <Field type="text" id="login-email" placeholder="Votre email" handleChange={(val) => console.log(val)} />
          <Field
            type="password"
            id="login-pass"
            placeholder="Votre mot de passe"
            handleChange={(val) => console.log(val)}
          />
          <SubmitButton>C&apos;est parti !</SubmitButton>
          <div className={style.forgot}>
            <Link to="/forgot-pass" className={style.link}>
              J&apos;ai oublié mon mot de passe
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
