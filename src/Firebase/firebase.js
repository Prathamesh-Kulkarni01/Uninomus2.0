import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import service from './config';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWWj6WFMbpkIyXCI-1vfmLi_vQ9kh8GMg",
  authDomain: "campusmasterapi.firebaseapp.com",
  databaseURL: "https://campusmasterapi-default-rtdb.firebaseio.com",
  projectId: "campusmasterapi",
  storageBucket: "campusmasterapi.appspot.com",
  messagingSenderId: "348191578541",
  appId: "1:348191578541:web:bc0cb87c707df24bdd2924",
  measurementId: "G-29JRXRBCCG"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;

// Get a list of cities from your database
export async function getCities() {

  const data=await service.getCollection('Bookings',{where:[{field:'event',op:'=',value:"giveaway"}]})
    return data;
}