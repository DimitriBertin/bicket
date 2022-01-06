import { Field, SubmitButton, UploadFile } from 'components'
import SmallButton from 'components/SmallButton'
import { ActionName, ThemeContext } from 'contextes/themes'
import { useContext, useEffect, useState } from 'react'
import style from './style.module.scss'

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function FormProfil() {
  const [newPass, setNewPass] = useState(false)
  const {
    state: { user },
    dispatch,
  } = useContext(ThemeContext)
  const [data, setData] = useState({
    email: '',
    lastname: '',
    name: '',
    avatar: '',
    phone: '',
    password: null,
    confirmPassword: null,
  })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    setData({
      email: user.email,
      lastname: user.lastname,
      name: user.name,
      avatar: user.avatar,
      phone: user.phone,
      password: null,
      confirmPassword: null,
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (data.email === '') {
      setError('Désolé, vous devez au moins mettre un email !')
    }

    if (data.email !== '' && !regexEmail.test(data.email.toLowerCase())) {
      setError('Vous devez avoir un email valide !')
    }

    if (data.password && data.password !== data.confirmPassword) {
      setError('Votre mot de passe ne correspond pas à sa confirmation !')
    }

    if (error === '') {
      dispatch({
        type: ActionName.UPDATE,
        payload: {
          user: {
            ...user,
            email: data.email,
            name: data.name,
            lastname: data.lastname,
            displayName: `${data.name} ${data.lastname}`,
            phone: data.phone,
            avatar: data.avatar,
          },
        },
      })
    }
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
        handleChange={(val) => setData({ ...data, email: val })}
        value={user.email}
      />
      <Field
        type="text"
        placeholder=""
        label="Votre nom"
        id="profil-name"
        handleChange={(val) => setData({ ...data, name: val })}
        value={user.name}
      />
      <Field
        type="text"
        placeholder=""
        label="Votre prenom"
        id="profil-lastname"
        handleChange={(val) => setData({ ...data, lastname: val })}
        value={user.lastname}
      />
      <Field
        type="text"
        placeholder=""
        label="Votre téléphone"
        id="profil-phone"
        handleChange={(val) => setData({ ...data, phone: val })}
        value={user.phone}
      />
      {newPass && (
        <div className={style.pass}>
          <p>Modifier votre mot de passe: </p>
          <Field
            type="password"
            placeholder=""
            label="Nouveau mot de passe"
            id="profil-pass"
            handleChange={(val) => setData({ ...data, password: val })}
          />
          <Field
            type="text"
            placeholder=""
            label="Confirmer le mot de passe"
            id="profil-confirm-pass"
            handleChange={(val) => setData({ ...data, confirmPassword: val })}
          />
        </div>
      )}
      <div className={style.flex}>
        <SmallButton handleClick={() => setNewPass(!newPass)} label={'Changer de mot de passe'} />
      </div>
      <SubmitButton align="center">Modifier mon profil</SubmitButton>
    </form>
  )
}
