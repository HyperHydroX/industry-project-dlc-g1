import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { doc, updateDoc } from 'firebase/firestore'
import { user } from './firebase'

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

export let startTime, pauzeTime, reset

export const updateTimer = (requestType) => {
  return new Promise((resolve, reject) => {
    if (requestType == 'start') {
      startTime = new Date().getTime()
      updateDoc(doc(db, 'players', user.uid), {
        StartTime: startTime,
      })
        .then((res) => {
          console.log(res)
          resolve('Timer gestart')
        })
        .catch((err) => {
          console.log(err)
          startTime = 0
          reject(err)
        })
    } else if (requestType == 'pauze') {
      pauzeTime = new Date().getTime()
        updateDoc(doc(db, 'players', user.uid), {
          PauzeTime: pauzeTime,
        })
          .then((res) => {
            console.log(res)
            pauzeTime = 0
            resolve('Timer gepauzeerd')
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
    } else if (requestType == 'reset') {
      reset = new Date().getTime()
      updateDoc(doc(db, 'players', user.uid), {
        StartTime: reset,
        PauzeTime: reset,
      })
        .then((res) => {
          console.log(res)
          resolve('Timer reset')
        })
        .catch((err) => {
            console.log(err);
            reset = 0;
          reject(err)
        })
    }
  })
}
