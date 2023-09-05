import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { sendPasswordResetEmail, getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";//https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase-auth.js
//import { getAnalytics } from "/firebase/analytics";
import { doc, setDoc, getFirestore, collection, getDocFromCache, addDoc, Timestamp, onSnapshot, getDoc, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
//import {getStorage, ref } from"https://cdnjs.cloudflare.com/ajax/libs/firebase/10.2.0/firebase-storage.min.js"
import {getStorage, ref } from"https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js"




const firebaseConfig = {
    apiKey: "AIzaSyBY--8B6GMBAauWXdOh1bWyNFwO8LR1LfY",
    authDomain: "fablab-8b5aa.firebaseapp.com",
    projectId: "fablab-8b5aa",
    storageBucket: "fablab-8b5aa.appspot.com",
    messagingSenderId: "186686644354",
    appId: "1:186686644354:web:33281311d8365b421f949b",
    measurementId: "G-JXB0J1C4TG"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore()
const auth = getAuth(app)



//Variables
var botonEnviar = document.getElementById("btnEnviar")


console.log(botonEnviar)
botonEnviar.addEventListener("click", ()=>{

  console.log("click")
  nuevoPedido()
  
})



async function nuevoPedido(){


  var nombre1 = document.getElementById('inputNombre').value
  var descripcion = document.getElementById('inputDescripcion').value
  var cantidad = document.getElementById('inputCantidad').value
  var material = document.getElementById('selectmaterial').value


  try{

    const docRef = await addDoc(collection(db, "pedidos"), {
      nnombre: nombre1,
      descripcion: descripcion,
      cantidad: cantidad,
      material: material,
      estado:"pendiente"
    });

    /*await setDoc(doc(db, "pedidos", "1"),{
      nombre: nombre1,
      descripcion: descripcion,
      cantidad: cantidad,
      material: material
    })*/
  }catch(e){
    console.log(e)
  }
  

}


async function leerDatos(){
  const docRef = doc(dib, "")
}



/*
const firebaseConfig = {



    apiKey: "AIzaSyBY--8B6GMBAauWXdOh1bWyNFwO8LR1LfY",
    authDomain: "fablab-8b5aa.firebaseapp.com",
    projectId: "fablab-8b5aa",
    storageBucket: "fablab-8b5aa.appspot.com",
    messagingSenderId: "186686644354",
    appId: "1:186686644354:web:33281311d8365b421f949b",
    measurementId: "G-JXB0J1C4TG"
  };
  */






