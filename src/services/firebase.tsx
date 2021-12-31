export function setFirebaseError(error) {
  switch (error) {
    case 'auth/user-not-found':
      return 'Désolé, votre identifiant/mot de passe ne correspond pas'
    case 'auth/invalid-email':
      return 'Votre email est invalide.'
    default:
      return error
  }
}
