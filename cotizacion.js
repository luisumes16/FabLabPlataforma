
document.getElementById('divp2').hidden = true

console.log('hola mundo')
let radioBtns = document.querySelectorAll("input[name='familia']")

let findSelectd = ()=> {
    let selected = document.querySelector("input[name='fruit']:checked").value
    console.log(selected)
}



document.getElementById('btncalcular').addEventListener('click',()=>{
    let elementoActivo = document.querySelector('input[name="status"]:checked');
    if(elementoActivo) {
        alert(elementoActivo.value);
    } else {
        alert('No hay ninún elemento activo');
    }
    var ancho = document.getElementById('inputancho').value
    var largo = document.getElementById('inputlargo').value
    var cantidad = document.getElementById('inputcantidad').value
    var lprecio = document.getElementById('lprecio')
    var lprecioM = document.getElementById('lprecioM')
    var lpreciou = document.getElementById('lpreciou')
    var lcm = document.getElementById('lcm')
    var cm = ancho * largo;
    lcm.textContent = "Cm2: "+ cm+"cm."
    var preciocm = 0.00556
    var preciou = preciocm*cm
    lpreciou.textContent = "Precio: Q."+preciou.toFixed(2)

    if(preciou > 25){
        var preciot = (preciou*cantidad)*1.5
    }else {
        var preciot = (preciou*cantidad)*2
    }
    

    lprecio.textContent = "Precio: Q."+preciot.toFixed(2)
    lprecioM.textContent = "Precio: Q."+preciot.toFixed(2)



})

