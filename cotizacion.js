

document.getElementById('divp2').hidden = true

document.getElementById('selectCalculo').addEventListener('change', () => {
    var valor = document.getElementById('selectCalculo').value
    if (valor == '1') {

        document.getElementById('divp2').hidden = true
    } else if (valor == '2') {

        document.getElementById('divp2').hidden = false
    }
})





document.getElementById('btncalcular').addEventListener('click', () => {
    var valor = document.getElementById('selectCalculo').value
    var lprecio = document.getElementById('lprecio')
    var lprecioM = document.getElementById('lprecioM')
    var preciot = 0
    if (valor == '1'){
        preciot = onlyMaterial()
    }else {
        preciot = onlyMaterial()
        preciot += tiempoLaser()
    }
    
    
    lprecio.textContent = "Precio: Q." + preciot.toFixed(2)
    lprecioM.textContent = "Precio: Q." + preciot.toFixed(2)
})


function onlyMaterial() {


//ACRILICO NEGRO
    //var precioplancha = 475

//ACRILICO
    //var precioplancha = 450
   //MDF
   //var precioplancha = 165
   //MADERA 1.2 por 2.4
    var precioplancha = 600
    //
    var divisiones = 5
    var pdiv = precioplancha/divisiones
    var cm21 = 90*60  

    var ancho = document.getElementById('inputancho').value
    var largo = document.getElementById('inputlargo').value
    var cantidad = document.getElementById('inputcantidad').value

    var lpreciou = document.getElementById('lpreciou')
    var lcm = document.getElementById('lcm')
    var cm = ancho * largo;
    lcm.textContent = "Cm2: " + cm + "cm."
    var preciocm = 0.0208383    
    //var preciocm = pdiv/cm21
    console.log(preciocm)
    var preciou = preciocm * cm
    lpreciou.textContent = "Precio: Q." + preciou.toFixed(2)

    if (preciou > 25) {
        var preciot = (preciou * cantidad) * 1.5
    } else {
        var preciot = (preciou * cantidad) * 2
    }

    return preciot

}

function tiempoLaser() {
    var tiempo = document.getElementById('inputtiempo').value
    if (tiempo == " "){
        return 0
    }else {
        var preciotiempo = tiempo * 3
        console.log(preciotiempo)
        return preciotiempo
    }
    
}
function ganancia() {
    var tiempo = document.getElementById('inputtiempo').value
    if (tiempo == " "){
        return 0
    }else {
        var preciotiempo = tiempo * 4
        console.log(preciotiempo)
        return preciotiempo
    }
    
}


