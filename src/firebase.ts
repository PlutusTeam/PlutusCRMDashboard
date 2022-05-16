// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsgs7JFQ2aXrbnw1UevWl1B_fmxCicU5Q",
  authDomain: "plutus-9c17c.firebaseapp.com",
  databaseURL: "https://plutus-9c17c.firebaseio.com",
  projectId: "plutus-9c17c",
  storageBucket: "plutus-9c17c.appspot.com",
  messagingSenderId: "472398922322",
  appId: "1:472398922322:web:057a66d4b3bbb800b5958b",
  measurementId: "G-6F8N3KRLFY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);

export const getOrderData = async () => {
  const querySnapshot = await getDocs(collection(db, 'Businesses/test-business-1/OrderData/AggregateData/Snapshots'));
  const ret = querySnapshot.docs.map(doc => ({id: doc.id, ... doc.data()}))
  console.log(ret)
  return ret
}

export const getAllOrderData = () => {
  console.log('Test')
  const orderData = getOrderData()

  // Promise.resolve(orderData).then((value) => {
  //   console.log(value)
  //   return value
  // })

  // return []
  return Promise.resolve(orderData)
}
