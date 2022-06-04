import { initializeApp } from "firebase/app";
import {collection, getDocs, addDoc, getDoc, getFirestore, query, where, doc} from 'firebase/firestore'

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
const ordersCollection = collection(db, "orders")

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

export const sendOrder = (products, totalPrice) => {
  products.map( product => {
    delete product.src;
    delete product.category;
    delete product.stock;
    delete product.description
  })
  const order = {
    buyer: { 
      name: 'Agustin',
      phone: '111',
      email: 'agustin@email.com '
    },
    items: products,
    total: totalPrice
  }
  addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))
}