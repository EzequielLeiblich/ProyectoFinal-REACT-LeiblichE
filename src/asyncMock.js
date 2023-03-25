const products = [
    {
        id: '1',
        name: 'Bomba de agua',
        marca: 'SKF',
        price: 7500,
        category: 'Motor',
        description: 'Peugeot y Citroen',
        img: 'https://http2.mlstatic.com/D_NQ_NP_873169-MLA41832295855_052020-O.webp',
        stock: 3
    },
    {
        id: '2',
        name: 'Bujía',
        marca: 'Bosch',
        price: 970,
        category: 'Motor',
        description: 'Peugeot y Citroen',
        img: 'https://http2.mlstatic.com/D_NQ_NP_884061-MLA31909890241_082019-O.webp',
        stock: 60
    },
    {
        id: '3',
        name: 'Bateria 75*12',
        marca: 'Willard',
        price: 26000,
        category: 'Electricidad',
        description: 'Todos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_691388-MLA51840548559_102022-O.webp',
        stock: 5
    },
    {
        id: '4',
        name: 'Lámpara H7',
        marca: 'Philips',
        price: 1200,
        category: 'Electricidad',
        description: 'Todos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_603250-MLA49795366890_042022-O.webp',
        stock: 40
    },
    {
        id: '5',
        name: 'Shampoo',
        marca: 'Meguiars',
        price: 5300,
        category: 'Limpieza',
        description: 'Todos',
        img: 'https://store.upsangel.com/wp-content/uploads/2019/05/81JJmRj19yL._SX425_1.jpg',
        stock: 20
    },
    {
        id: '6',
        name: 'Aceite sintetico 0w20',
        marca: 'ACDelco',
        price: 7800,
        category: 'Motor',
        description: 'Chevrolet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_959104-MLA52578237238_112022-O.webp',
        stock: 14
    },
    {
        id: '7',
        name: 'Bomba de freno Aluminio Bora 2.0',
        marca: 'Volkswagen',
        price: 30210,
        category: 'Frenos',
        description: 'Volkswagen Bora 2.0',
        img: 'https://http2.mlstatic.com/D_NQ_NP_940274-MLA53433663169_012023-O.webp',
        stock: 1
    },
    {
        id: '8',
        name: 'Aceite sintetico 0w30',
        marca: 'Shell',
        price: 16574,
        category: 'Motor',
        description: 'Volkswagen Amarok',
        img: 'https://shop11223.sfstatic.io/upload_dir/shop/_thumbs/Shell-Helix-Ultra-ECT-C2-C3---4-Liter.w610.h610.fill.jpg',
        stock: 15
    },
    {
        id: '9',
        name: 'Pomo palanca + suplemento',
        marca: 'Peugeot',
        price: 4050,
        category: 'Carroceria',
        description: 'Peugeot 408',
        img: 'https://http2.mlstatic.com/D_NQ_NP_990057-MLA52167677426_102022-O.webp',
        stock: 5
    },
    {
        id: '10',
        name: 'Antena 40cm',
        marca: 'Generica',
        price: 1599,
        category: 'Electricidad',
        description: 'Todos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_883881-MLA48317442661_112021-O.webp',
        stock: 10
    },
    {
        id: '11',
        name: 'Soporte motor derecho',
        marca: 'Chevrolet',
        price: 12307,
        category: 'Motor',
        description: 'Chevrolet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_853384-MLA43425425843_092020-O.webp',
        stock: 6
    },
    {
        id: '12',
        name: 'Deposito refrigerante',
        marca: 'Citroen',
        price: 5490,
        category: 'Motor',
        description: 'Citroen C4 1.6N',
        img: 'https://http2.mlstatic.com/D_NQ_NP_926690-MLA44483887878_012021-O.webp',
        stock: 2
    },
    {
        id: '13',
        name: 'Bieleta suspension trasera',
        marca: 'Peugeot',
        price: 2988,
        category: 'Suspension',
        description: 'Peugeot 406',
        img: 'https://http2.mlstatic.com/D_NQ_NP_848159-MLA27168657769_042018-O.webp',
        stock: 4
    },
    {
        id: '14',
        name: 'Faro trasero',
        marca: 'Ford',
        price: 10570,
        category: 'Carroceria',
        description: 'Ford Ka',
        img: 'https://nhorizontesa.vtexassets.com/arquivos/ids/547669-800-800?v=637304347182030000&width=800&height=800&aspect=true',
        stock: 2
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}