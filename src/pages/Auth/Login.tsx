import { Field, SubmitButton } from 'components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import style from 'styles/login.module.scss'
import { setFirebaseError } from 'services/firebase'

export default function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const auth = getAuth()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (userCredential) {
        // console.log('USER CREDENTIAL', userCredential)
      }
    } catch (error) {
      setError(setFirebaseError(error.code))
    }
  }

  return (
    <div className={style.block}>
      <div className={style.container}>
        <h1 className={style.title}>
          Connectez vous,
          <span> pour gérer votre site web.</span>
        </h1>
        <form className={style.form} autoComplete="off" onSubmit={handleSubmit}>
          <Field type="text" id="login-email" placeholder="Votre email" handleChange={(val) => setEmail(val)} />
          <Field
            type="password"
            id="login-pass"
            placeholder="Votre mot de passe"
            handleChange={(val) => setPassword(val)}
          />
          <SubmitButton>C&apos;est parti !</SubmitButton>
          {error && <p className={style.error}>{error}</p>}
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
