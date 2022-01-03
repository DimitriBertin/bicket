import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'

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
