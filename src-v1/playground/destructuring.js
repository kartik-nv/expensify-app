
//Object Destructuring

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName) //Penguin or Self-published


// Array Destructuring

const address = ['4652 Bhadkal Galli', 'Belagavi', 'Karnataka', 'India']
const [street = 'Sadashiv Nagar', city, state, country] = address
console.log(`You are in ${street} ${city}. `)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [size, , amt] = item
console.log(`A medium ${size} costs ${amt}`)