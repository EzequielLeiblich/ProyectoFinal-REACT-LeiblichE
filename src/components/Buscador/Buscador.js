/* BUSCADOR DE REPUESTOS */
let buscador = document.getElementById("buscador")

function buscarInfo(buscado, array){
    let busquedaArray = array.filter(
        (repuesto) => repuesto.marca.toLowerCase().includes(buscado.toLowerCase()) || repuesto.nombre.toLowerCase().includes(buscado.toLowerCase())
    ) 
    busquedaArray.length == 0 ? 
    (coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`, 
    mostrarCatalogo(busquedaArray)) 
    : 
    (coincidencia.innerHTML = "", 
    mostrarCatalogo(busquedaArray))
}

buscador.addEventListener("input", ()=>{
    buscarInfo(buscador.value.toLowerCase(), stock)
}) 