import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763
// });
// database.ref("expenses").push({
//   description: "Water",
//   note: "",
//   amount: 5000,
//   createdAt: 976123498763
// });
// database.ref("expenses").push({
//   description: "Food",
//   note: "",
//   amount: 12000,
//   createdAt: 976123498763
// });

// database.ref("notes").push({
//   title: "first note",
//   body: "first note body"
// });

// database.ref("notes").push({
//   title: "Topics",
//   body: "React"
// });

// const firebaseNotes = {
//   notes: {
//     12: { title: "first note", body: "this one note" },
//     13: { title: "second note", body: "this is second note" }
//   }
// };

// const notes = [
//   { id: 12, title: "first note", body: "this one note" },
//   { id: 13, title: "second note", body: "this is second note" }
// ];

// database.ref("notes").set(notes);
// database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("err", e);
//   }
// );

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("why oh why. error", e);
//   });

// database
//   .ref("location")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("why oh why. error", e);
//   });

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("why oh why. error", e);
//   });

// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Ravindar",
//     age: 42,
//     single: false,
//     location: {
//       city: "berwyn",
//       country: "united states"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved.");
//   })
//   .catch(e => {
//     console.log("error", e);
//   });

// firebase
//   .database()
//   .ref("age")
//   .set(42);
// firebase
//   .database()
//   .ref("location/city")
//   .set("Indore");

// firebase
//   .database()
//   .ref("attributes")
//   .set({
//     height: 73,
//     weight: 235
//   });

// database
//   .ref("single")
//   .remove()
//   .then(() => {
//     console.log("removed success");
//   })
//   .catch(e => {
//     console.log("failure", e);
//   });

// database.ref().update({
//   name: "rsg",
//   age: "41",
//   job: "has one",
//   singe: null
// });
