import { Field, SubmitButton } from 'components'
import ReturnButton from 'components/ReturnButton'
import { ActionName, ThemeContext } from 'contextes/themes'
import { useContext, useRef, useState } from 'react'
import style from 'styles/pages/profile.module.scss'
import { getAuth, updateProfile } from 'firebase/auth'
import { BsCamera } from 'react-icons/bs'

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
  const file = useRef(null)

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
          <div className={style.wrapPhoto}>
            <div className={style.photo}>
              <input type="file" name="" className={style.input} ref={file} />
              <BsCamera />
            </div>
          </div>
          <SubmitButton align="center">Modifier mon profil</SubmitButton>
          {success && <p className={style.success}>Profil modifié avec succès :)</p>}
        </form>
      </div>
    </div>
  )
}
