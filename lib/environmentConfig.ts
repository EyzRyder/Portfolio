const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
}

const emailConfig = {
  from: process.env.EMAILAUTH_USER,
  to: process.env.EMAILAUTH_TO,
  pass: process.env.EMAILAUTH_PASS,
}

const environment = {
  email: emailConfig,
  firebase: firebaseConfig,
}

export default environment
