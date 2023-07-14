import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import environment from './environmentConfig'

const app = initializeApp(environment.firebase)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const worksCollection = collection(db, 'works')
