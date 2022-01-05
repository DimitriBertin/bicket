import { Field, SubmitButton, UploadFile } from 'components'
import { ThemeContext } from 'contextes/themes'
import { useContext, useState } from 'react'
import style from './style.module.scss'

export default function FormProfil() {
  const [data, setData] = useState({})
  const [newPass, setNewPass] = useState(false)
  const {
    state: { user },
  } = useContext(ThemeContext)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className={style.block}>
      {/* FILE UPLOAD COMPONENT */}
      <UploadFile id="upload-avatar" />
      <Field
        type="text"
        placeholder=""
        label="Votre email"
        id="profil-email"
        handleChange={(val) => console.log(val)}
        value={user.email}
      />
      <Field
        type="text"
        placeholder=""
        label="Votre nom"
        id="profil-name"
        handleChange={(val) => console.log(val)}
        value={user.name}
      />
      <Field
        type="text"
        placeholder=""
        label="Votre prenom"
        id="profil-lastname"
        handleChange={(val) => console.log(val)}
        value={user.lastname}
      />
      <Field
        type="text"
        placeholder=""
        label="Votre téléphone"
        id="profil-phone"
        handleChange={(val) => console.log(val)}
        value={user.name}
      />
      {newPass && (
        <div className={style.pass}>
          <p>Modifier votre mot de passe: </p>
          <Field
            type="password"
            placeholder=""
            label="Nouveau mot de passe"
            id="profil-pass"
            handleChange={(val) => console.log(val)}
          />
          <Field
            type="text"
            placeholder=""
            label="Confirmer le mot de passe"
            id="profil-confirm-pass"
            handleChange={(val) => console.log(val)}
          />
        </div>
      )}
      <div className={style.flex}>
        <button type="button" className={style.smallBtn} onClick={() => setNewPass(!newPass)}>
          Changer de mot de passe
        </button>
      </div>
      <SubmitButton align="center">Modifier mon profil</SubmitButton>
    </form>
  )
}
