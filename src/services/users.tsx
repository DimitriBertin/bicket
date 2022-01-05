import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import { BsEye, BsShieldLock, BsPen } from 'react-icons/bs'
import { getAuth } from 'firebase/auth'

export async function getUser(uid: string) {
  const db = getFirestore()
  const q = query(collection(db, 'users'), where('uid', '==', uid))
  const querySnapshot = await getDocs(q)
  let user = null
  querySnapshot.forEach((doc) => {
    if (doc.id) user = doc.data()
  })

  return user
}

export function setRoleView(role) {
  if (role === 'A') {
    return (
      <>
        <BsShieldLock /> Administrateur
      </>
    )
  }

  if (role === 'C') {
    return (
      <>
        <BsPen /> Contributeur
      </>
    )
  }

  if (role === 'R') {
    return (
      <>
        <BsEye /> Reader
      </>
    )
  }
}

export function getListUsers() {
  const auth = getAuth()
  console.log(auth)
}
