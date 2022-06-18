function enviarDatos() {
    
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value
    let unidades = document.getElementById("unidades").value
    let fecha = document.getElementById("fechaCompra").value
    let jsonArgs = {"nombre":nombre,"precio":parseFloat(precio),"unidades":parseInt(unidades),"fechaCompra":fecha}
    let json = JSON.stringify(jsonArgs)
    
    fetch("https://hitogrupallenguaje.herokuapp.com/add",{mode:"no-cors",method:"POST",body:json})
        .then(function (){
            alert("Producto Añadido")
            clearFields()
        })
}

function clearFields(){
    document.getElementById("nombre").value=""
    document.getElementById("unidades").value=""
    document.getElementById("precio").value=""
    document.getElementById("fechaCompra").value=""
}