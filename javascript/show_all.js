window.onload = ()=>{
    getAllProducts()
}

function getAllProducts(){
    fetch("https://hitogrupallenguaje.herokuapp.com/",{method:"GET"})
        .then(response => response.json())
        .then(data => recorrerArray(data))
}

function recorrerArray(array){
    let tabla = document.getElementById("tabla")
    
    for (const producto of array) {
        let fila = document.createElement("tr")
        fila.innerHTML = "<td>"+producto.id+"</td>"+
            "<td>"+producto.nombre+"</td>"+
            "<td>"+producto.precio+"</td>"+
            "<td>"+producto.unidades+"</td>"+
            "<td>"+producto.fechaCompra+"</td>"
        tabla.appendChild(fila)
    }
}