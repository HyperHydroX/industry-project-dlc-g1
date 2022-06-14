import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRaJ9itsKcoXq9_XHcF715IoZCOm15Qbc',
  authDomain: 'project-dlc.firebaseapp.com',
  projectId: 'project-dlc',
  storageBucket: 'project-dlc.appspot.com',
  messagingSenderId: '776741185029',
  appId: '1:776741185029:web:7b43b24e0c38c43acfde6c',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const auth = getAuth()

export const sponsers = []
import { user } from '../layouts/LoginLayout'

// export const registerUser = (email, password) => {
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//     // User credentials
//     user = userCredential.user;
//   })
//   .catch((error) => {
//     console.log(error.code)
//     console.log(error.message)
//   });
// }
export const loginUser = new Promise((resolve, reject, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User credentials
      user = userCredential.user
      resolve(user)
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
      reject(error)
    })
})
export const uploadFile = async (file) => {
  try {
    console.log(file)
    const storage = getStorage()
    const storageRef = ref(storage, `/${user.uid}` + `/${file.name}`)
    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath)).then((url) => {
          sponsers.push(url)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  } catch (error) {
    console.log(file)
    console.log(user)
    console.log(error)
  }
}
