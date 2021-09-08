import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }

// const expenses = [{
//     description: 'Rent',
//     note: '',
//     amount: 3600,
//     createdAt: '12 June'
// }, {
//     description: 'Current Bill',
//     note: 'June',
//     amount: 150,
//     createdAt: '23 June'
// }, {
//     description: 'Water Bill',
//     note: 'August',
//     amount: 1500,
//     createdAt: '12 August'
// }]

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })

// database.ref('expenses').push(expenses[0])










// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Nativr, Angular, Python'
// })

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val()
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// setTimeout(() => {
//     database.ref('age').set(20)
// }, 10500)

// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// }).catch((e) => {
//     console.log('Error: ', e)
// })

// database.ref().set({
//     name: 'Kartik NV',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'Billberd'
//     },
//     location: {
//         city: 'Belagavi',
//         country: 'India'
//     },
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('error: ', error)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Bangalore'
// })

// database.ref('isSingle').remove().then(() => {
//     console.log('Removed successfully')
// }).catch((e) => {
//     console.log('Error: ', e)
// })