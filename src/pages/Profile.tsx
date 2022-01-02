import { Field, SubmitButton } from 'components'
import ReturnButton from 'components/ReturnButton'
import { ActionName, ThemeContext } from 'contextes/themes'
import { useContext, useState } from 'react'
import style from 'styles/pages/profile.module.scss'
import { getAuth, updateProfile } from 'firebase/auth'

export default function Profile() {
  const {
    state: { user },
    dispatch,
  } = useContext(ThemeContext)
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirm: '',
    displayName: '',
  })
  const [newPass, setNewPass] = useState(false)
  const [success, setSuccess] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    updateProfile(auth.currentUser, {
      displayName: userData.displayName,
      photoURL: '',
    }).then(() => {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 2000)
      dispatch({
        type: ActionName.UPDATE,
        payload: {
          user: {
            ...user,
            displayName: userData.displayName,
          },
        },
      })
    })
  }

  return (
    <div className={style.block}>
      <ReturnButton label="Page d'acceuil" url="/" />
      <h1 className={style.title}>Profil</h1>
      <p className={style.description}>
        Modifier votre profil ici en ajoutant une super image de profil par exemple ou en changeant de mot de passe.
      </p>
      <div className={style.wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={style.flex}>
            <div className={style.photo}></div>
            <div className={style.fields}>
              <Field
                type="email"
                placeholder="Votre email"
                id="profile-email"
                value={user.email}
                handleChange={(val) => setUserData({ ...userData, email: val })}
              />
              <Field
                type="text"
                placeholder="Votre nom / prenom"
                id="profile-name"
                value={user.displayName}
                handleChange={(val) => setUserData({ ...userData, displayName: val })}
              />
              {newPass && (
                <>
                  <Field
                    type="password"
                    placeholder="Votre nouveau mot de passe"
                    id="profile-password"
                    handleChange={(val) => setUserData({ ...userData, password: val })}
                  />
                  <Field
                    type="password"
                    placeholder="Confirmer nouveau mot de passe"
                    id="profile-password-confirm"
                    handleChange={(val) => setUserData({ ...userData, confirm: val })}
                  />
                </>
              )}
              <button type="button" onClick={() => setNewPass(!newPass)} className={style.newpass}>
                Demander un nouveau mot de passe ?
              </button>
            </div>
          </div>
          <SubmitButton align="center">Modifier mon profil</SubmitButton>
          {success && <p className={style.success}>Profil modifié avec succès :)</p>}
        </form>
      </div>
    </div>
  )
}
