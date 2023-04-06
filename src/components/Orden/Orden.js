/* ORDENAR CATALOGO */
let selectOrden = document.getElementById("selectOrden")

function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarCatalogo(menorMayor)
}
function ordenarMayorMenor(arr){
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    mostrarCatalogo(mayorMenor)
}
function ordenarAlfabeticamenteNombre(array){
    const ordenadoAlfabeticamente = [].concat(array)
    ordenadoAlfabeticamente.sort((a,b) => {
        if(a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0;
    })
    mostrarCatalogo(ordenadoAlfabeticamente)
}

selectOrden.addEventListener("change", ()=>{
    if(selectOrden.value == 1){
        ordenarMayorMenor(stock)
    }else if(selectOrden.value == 2){
        ordenarMenorMayor(stock)
    }else if(selectOrden.value == 3){
        ordenarAlfabeticamenteNombre(stock)
    }else{
        mostrarCatalogo(stock)
    }
})