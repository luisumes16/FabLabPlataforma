import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { sendPasswordResetEmail, getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";//https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase-auth.js
//import { getAnalytics } from "/firebase/analytics";
import { doc, setDoc, getFirestore, collection, getDocFromCache, addDoc, Timestamp, onSnapshot, getDoc, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"



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

var botonEnviar=document.getElementById("btnEnviar")
console.log(botonEnviar)
botonEnviar.addEventListener("click", ()=>{
    console.log("click")
    nuevoPedido()
})


var botonBorrar=document.getElementById("btnBorrar")
console.log(botonBorrar)
botonBorrar.addEventListener("click", ()=>{
    console.log("click-borrar")
})


var botonCancelar=document.getElementById("btnCancelar")
console.log(botonCancelar)
botonCancelar.addEventListener("click", ()=>{
    console.log("click-cancelar")
})


async function nuevoPedido(){
    var nombre1=document.getElementById("inputNombre").value
    var telefono=document.getElementById("inputTelefono").value
    var descripcion=document.getElementById("inputDescripción").value
    var ancho=document.getElementById("inputAncho").value
    var largo=document.getElementById("inputLargo").value
    var cantidad=document.getElementById("inputCantidad").value
    var material=document.getElementById("inputMaterial").value
    var proyecto=document.getElementById("selectProyecto").value
    
    if (nombre1==" "|| telefono==" "||descripcion==" "||ancho==" "||largo==" "||cantidad==""|| material=="0"||proyecto=="0")
    {
        console.log("COMPLETE EL FORMULARIO")
    }
    else{
        try{

            const docRef = await addDoc(collection(db, "pedidos"), {
              nnombre: nombre1,
              telefo:telefono,
              descripcion: descripcion,
              Ancho:ancho,
              Largo:largo,
              cantidad: cantidad,
              material: material,
              proyec:proyecto,
              estado:"pendiente"
            });
        
        
        }catch(e){
            console.log(e)
          }
    }

   
      
    
    }
    



async function leerDatos(){
    const docRef = doc(dib, "")
}