function eliminarProducto() {
    let id = document.getElementById("id").value
    fetch("https://hitogrupallenguaje.herokuapp.com/"+id,{mode:"no-cors",method:'POST'})
        .then(()=> {
            alert("Producto Eliminado")
            document.getElementById("id").value=""
        })
}
