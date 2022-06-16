import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { doc, updateDoc } from 'firebase/firestore'
import { user } from './firebase'
import { updateTekst } from '../scoreboard/scoreboard'

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

export let startTime, resetTime

export const updateTimer = (requestType) => {
  return new Promise((resolve, reject) => {
    if (requestType == 'starttimer') {
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
    } else if (requestType == 'resettimer') {
      resetTime = new Date().getTime()
      updateDoc(doc(db, 'players', user.uid), {
        StartTime: resetTime,
      })
        .then(() => {
          console.log('Timer reset')
          resolve('Timer reset')
        })
        .catch((err) => {
          console.log(err)
          resetTime = 0
          reject(err)
        })
    } else if (requestType == 'settimer') {
      // TODO
      console.log("TODO")
    }
  })
}

export const updateTekstFirebase = (tekst) => {
  return new Promise((resolve, reject) => {
    startTime = new Date().getTime()
    updateDoc(doc(db, 'players', user.uid), {
      TekstOpScherm: tekst,
    })
      .then((res) => {
        console.log(res)
        updateTekst(tekst)
        resolve('Timer gestart')
      })
      .catch((err) => {
        console.log(err)
        startTime = 0
        reject(err)
      })
  })
}
