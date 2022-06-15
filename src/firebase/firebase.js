import { initializeApp } from 'firebase/app'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  // setPersistence,
  // browserSessionPersistence,
} from 'firebase/storage'
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { doc, updateDoc, getDoc } from 'firebase/firestore'

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
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth()

// setPersistence(auth, browserSessionPersistence)
//   .then(() => {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.

//   })
//   .catch((error) => {
//     // Handle Errors here.
//     console.log(error.code)
//     console.log(error.message)
//   })

let user
export const sponsers = []

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
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
}

// export const registerUser = (
//   userId,
//   playerToken,
//   scoreThuis,
//   uitScore,
//   sporten,
//   volwassenSponsers,
//   jeugdSponsers,
// ) => {
//   return new Promise((resolve, reject) => {
//     createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // userId
//         // playerToken
//         // scoreThuis
//         // scoreUit
//         // sporten
//         // volwassenSponsers
//         // jeugdSponsers
//       })
//       .catch((error) => {
//         console.log(error.code)
//         console.log(error.message)
//         reject(error)
//       })
//   })
// }

export const resetUserPassword = (email) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Een email is verstuurd naar uw email.')
        resolve('Een email is verstuurd naar uw email.')
        // router.push({ name: 'loginLayout' })
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const GetDocument = async () => {
  const docRef = doc(db, 'players', user.uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
    return docSnap.data()
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')
  }
}

export const updateFlagColours = async (team, colour01, colour02) => {
  return new Promise((resolve, reject) => {
    if (team == 'home') {
      updateDoc(doc(db, 'players', user.uid), {
        FlagHome: [colour01, colour02],
      })
        .then(() => {
          resolve('Flag colour for home updated.')
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    } else if (team == 'out') {
      updateDoc(doc(db, 'players', user.uid), {
        FlagOut: [colour01, colour02],
      })
        .then(() => {
          resolve('Flag colour for out updated.')
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    } else {
      reject("De 'team' parameter kan slechts 'thuis' of 'uit' zijn.")
    }
  })
}

export const updateTeamScore = async (team, score) => {
  // Add a new document in collection "cities"
  return new Promise((resolve, reject) => {
    if (team == 'thuis') {
      updateDoc(doc(db, 'players', user.uid), {
        ScoreThuis: score,
      })
        .then(() => {
          resolve("Score voor 'thuis' ploeg geupdate.")
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    } else if (team == 'uit') {
      updateDoc(doc(db, 'players', user.uid), {
        ScoreUit: score,
      })
        .then(() => {
          resolve("Score voor 'uit' ploeg geupdate.")
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    } else {
      reject("De 'team' parameter kan slechts 'thuis' of 'uit' zijn.")
    }
  })
}

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
          updateDoc(doc(db, 'players', user.uid), {
            Sponsors: sponsers,
          })
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
