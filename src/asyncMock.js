const products = [
    {
        "id": 1,
        "nombre": "Bomba de agua",
        "marca": "SKF",
        "precio": 7500,
        "categoria": "Motor",
        "utilidad": "Peugeot y Citroen",
        "imagen": "bombaagua1.jpg"
    },
    {
        "id": 2,
        "nombre": "Bujia",
        "marca": "Bosch",
        "precio": 970,
        "categoria": "Motor",
        "utilidad": "Peugeot y Citroen",
        "imagen": "bujia1.jpg"
    },
    {
        "id": 3,
        "nombre": "Bateria 75*12",
        "marca": "Willard",
        "precio": 26000,
        "categoria": "Electricidad",
        "utilidad": "Todos",
        "imagen": "bateria1.jpg"
    },
    {
        "id": 4,
        "nombre": "Lámpara H7",
        "marca": "Philips",
        "precio": 1200,
        "categoria": "Electricidad",
        "utilidad": "Todos",
        "imagen": "lampara1.jpg"
    },
    {
        "id": 5,
        "nombre": "Shampoo",
        "marca": "Meguiars",
        "precio": 5300,
        "categoria": "Limpieza",
        "utilidad": "Todos",
        "imagen": "shampoo1.jpg"
    },
    {
        "id": 6,
        "nombre": "Aceite sintetico 0w20",
        "marca": "ACDelco",
        "precio": 7800,
        "categoria": "Motor",
        "utilidad": "Chevrolet",
        "imagen": "aceite1.jpg"
    },
    {
        "id": 7,
        "nombre": "Bomba de freno Aluminio Bora 2.0",
        "marca": "Volkswagen",
        "precio": 30210,
        "categoria": "Frenos",
        "utilidad": "Volkswagen Bora 2.0",
        "imagen": "Bombafrenobora1.jpg"
    },
    {
        "id": 8,
        "nombre": "Aceite sintetico 0w30",
        "marca": "Shell",
        "precio": 16574,
        "categoria": "Motor",
        "utilidad": "Volkswagen Amarok",
        "imagen": "aceite2.jpg"
    },
    {
        "id": 9,
        "nombre": "Pomo palanca + suplemento",
        "marca": "Peugeot",
        "precio": 4050,
        "categoria": "Carroceria",
        "utilidad": "Peugeot 408",
        "imagen": "pomopalanca1.jpg"
    },
    {
        "id": 10,
        "nombre": "Repuesto antena 40cm",
        "marca": "Generica",
        "precio": 1599,
        "categoria": "Electricidad",
        "utilidad": "Todos",
        "imagen": "antena1.jpg"
    },
    {
        "id": 11,
        "nombre": "Soporte motor derecho",
        "marca": "Chevrolet",
        "precio": 12307,
        "categoria": "Motor",
        "utilidad": "Chevrolet",
        "imagen": "Soportederechomotor1.jpg"
    },
    {
        "id": 12,
        "nombre": "Deposito refrigerante",
        "marca": "Citroen",
        "precio": 5490,
        "categoria": "Motor",
        "utilidad": "Citroen C4 1.6N",
        "imagen": "Depositorefrigerante1.jpg"
    },
    {
        "id": 13,
        "nombre": "Bieleta suspension trasera",
        "marca": "Peugeot",
        "precio": 2988,
        "categoria": "Suspension",
        "utilidad": "Peugeot 406",
        "imagen": "BieletaSuspTras1.jpg"
    },
    {
        "id": 14,
        "nombre": "Faro trasero",
        "marca": "Ford",
        "precio": 10570,
        "categoria": "Carroceria",
        "utilidad": "Ford Ka",
        "imagen": "FarotraseroKa1.jpg"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        },1000)
    })
}