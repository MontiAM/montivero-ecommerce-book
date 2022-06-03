import { initializeApp } from "firebase/app";
import {collection, getDocs, getDoc, getFirestore, query, where, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCnR8dXxt0Vez6z2VSswoMi2BSD2onEmSs",
  authDomain: "montivero-marcio-ecommerce.firebaseapp.com",
  projectId: "montivero-marcio-ecommerce",
  storageBucket: "montivero-marcio-ecommerce.appspot.com",
  messagingSenderId: "185903903054",
  appId: "1:185903903054:web:9c6911697b64e18df52e1f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemCollection = collection(db, "items");

export const getAllProducts = (category) => {
  if (category === undefined) {
    const q = query(itemCollection);
    return getDocs(q)
  }
  else {
    const q = query(
      itemCollection,
      where('category', '==', category.slice(1)))
    return getDocs(q)
  }
}

export const getProductsID = (id) => {
  const productID = doc(db, 'items', id)
  return getDoc(productID)
}