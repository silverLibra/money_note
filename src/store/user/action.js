import store from '../index'
import type from './type'
import { firestore } from "@firebaseUtils/index"

const { dispatch } = store


const getUserDocument = async uid => {
  if (!uid) return null
  try {
    const userDocument = await firestore.collection('users').doc(uid).get()
    return {
      uid,
      ...userDocument.data()
    }
  } catch (error) {
    console.error("Error fetching user", error)
  }
}

const generateUserDocument = async (user, additionalData) => {
  if (!user) return
  const userRef = firestore.collection('users').doc(user.uid)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { email } = user
    try {
      await userRef.set({
        email,
        ...additionalData
      })
    } catch (error) {
      console.error("Error creating user document", error)
    }
  }
  return getUserDocument(user.uid)
}

export const setUser = async value => {
  return generateUserDocument(value).then((result) => {
    if (result) {
      dispatch({ type: type.set, value: { email: result.email, isLogin: true } })
    }
  })
}


