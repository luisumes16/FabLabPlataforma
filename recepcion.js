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

leerDatos()

async function leerDatos(){
    const q = query(collection(db, "pedidos"), where("estado", "==", "pendiente"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  nuevoDiv(doc.data().nnombre,doc.data().telefo,doc.data().descripcion,doc.data().Ancho,doc.data().Largo,doc.data().cantidad,doc.data().material)

});
}



function nuevoDiv(nombre,telefono,descripcion,ancho,largo,cantidad,material){
  var divdatos=document.getElementById("ii")
  var div=document.createElement("div")
  div.className="card mt-4 p-3"
  var h=document.createElement("h3")
 h.textContent="Nombre del cliente: "+nombre
 var parrafo=document.createElement("p")
 parrafo.textContent="Tel: "+telefono
 var parrafo2=document.createElement("p") 
 parrafo2.textContent="Decripción del producto: "+descripcion
 var parrafo3=document.createElement("p")
 parrafo3.textContent="Medidas del producto: "
 var anch=document.createElement("p")
 anch.textContent="Ancho: "+ancho
 var lar=document.createElement("p")
 lar.textContent="Largo: "+largo
 var parrafo4=document.createElement("p")
 parrafo4.textContent="cantidad: "+cantidad
 var parrafo5=document.createElement("p")
 parrafo5.textContent="Material: " +material

 divdatos.appendChild(div)
 div.appendChild(h)
 div.appendChild(parrafo)
 div.appendChild(parrafo2)
 div.appendChild(parrafo3)
 div.appendChild(anch)
 div.appendChild(lar)
 div.appendChild(parrafo4)
 div.appendChild(parrafo5)
 
 
}
