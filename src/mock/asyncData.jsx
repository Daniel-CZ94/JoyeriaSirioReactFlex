const productos = [
    {
        id:"0011",
        nombre:"Anillo de compromiso de Oro 10k con Zirconia corazon",
        descripcion:"Anillo de compromiso de Oro 10k con Zirconia corazon",
        categoria:"Anillos",
        stock:12,
        precio:4300,
        img:"https://shop.fonelli.com/cdn/shop/files/S82149211_2.jpg"
    },
    {
        id:"0012",
        nombre:"Anillo de compromiso de Oro 10k solitario",
        descripcion:"Anillo de compromiso de Oro 10k solitario",
        categoria:"Anillos",
        stock:8,
        precio:3490,
        img:"https://shop.fonelli.com/cdn/shop/files/S82117414_4100x.jpg"
    },
    {
        id:"0013",
        nombre:"Anillo de compromiso de Oro 10k infinito",
        descripcion:"Anillo de compromiso de Oro 10k infinito",
        categoria:"Anillos",
        stock:3,
        precio:4560,
        img:"https://shop.fonelli.com/cdn/shop/files/S82154971_4100x.jpg"
    },
    {
        id:"0014",
        nombre:"Anillo de compromiso de Oro 10k con Zirconia doble corazon",
        descripcion:"Anillo de compromiso de Oro 10k con Zirconia doble corazon",
        categoria:"Anillos",
        stock:5,
        precio:4000,
        img:"https://shop.fonelli.com/cdn/shop/files/S82151012_4100x.jpg"
    },
    {
        id:"0015",
        nombre:"Churumbela de Oro 10k con Zirconia",
        descripcion:"Churumbela de Oro 10k con Zirconia",
        categoria:"Anillos",
        stock:2,
        precio:4000,
        img:"https://shop.fonelli.com/cdn/shop/files/S82150174_4100x.jpg"
    },
    {
        id:"0016",
        nombre:"Churumbela de oro de 10k triple con Zirconia",
        descripcion:"Churumbela de oro de 10k triple con Zirconia",
        categoria:"Anillos",
        stock:1,
        precio:7800,
        img:"https://shop.fonelli.com/cdn/shop/files/HJ723_4100x.jpg"
    },
    {
        id:"0017",
        nombre:"Anillo de compromiso churumbela de Oro 10k con Zirconia cuadrada",
        descripcion:"Anillo de compromiso churumbela de Oro 10k con Zirconia cuadrada",
        categoria:"Anillos",
        stock:4,
        precio:5050,
        img:"https://shop.fonelli.com/cdn/shop/files/S82115887_4100x.jpg"
    },
    {
        id:"0018",
        nombre:"Anillo de compromiso de Oro 10k con Zirconia corona",
        descripcion:"Anillo de compromiso de Oro 10k con Zirconia corona",
        categoria:"Anillos",
        stock:2,
        precio:4000,
        img:"https://shop.fonelli.com/cdn/shop/files/S82146856_4100x.jpg"
    },
    {
        id:"0021",
        nombre:"Argolla de Matrimonio Oro Amarillo 14k mateada",
        descripcion:"Argolla de Matrimonio Oro Amarillo 14k mateada 5mm",
        categoria:"Argollas",
        stock:10,
        precio:10300,
        img:"https://shop.fonelli.com/cdn/shop/files/Argolla_de_Matrimonio_Oro_Amarillo_10k_5mm_AR10-060505_-1_4100x.jpg"
    },
    {
        id:"0022",
        nombre:"Argolla De Matrimonio Oro Amarillo 14K lisa",
        descripcion:"Argolla De Matrimonio Oro Amarillo 14K lisa 6mm Alianza III",
        categoria:"Argollas",
        stock:6,
        precio:12800,
        img:"https://shop.fonelli.com/cdn/shop/products/Argolla_De_Matrimonio_Oro_Amarillo_14K_6mm_Alianza_III_4100x.png"
    },
    {
        id:"0023",
        nombre:"Argolla De Matrimonio Oro Amarillo 14K Grecas",
        descripcion:"Argolla De Matrimonio Oro Amarillo 14K Grecas 6mm",
        categoria:"Argollas",
        stock:4,
        precio:8050,
        img:"https://shop.fonelli.com/cdn/shop/products/Argolla_De_Matrimonio_Oro_Amarillo_14K_6mm_AR14-02576H_4100x.png"
    },
    {
        id:"0024",
        nombre:"Argolla De Matrimonio Oro Amarillo 14k doble linea",
        descripcion:"Argolla De Matrimonio Oro Amarillo 14k doble linea 5mm Inspiración",
        categoria:"Argollas",
        stock:12,
        precio:10250,
        img:"https://shop.fonelli.com/cdn/shop/products/Argolla_De_Matrimonio_Oro_Amarillo_14k_5mm_Inspiraci_n_4100x.png"
    },
    {
        id:"0025",
        nombre:"Argolla de matrimonio de Oro Florentino 14K estrellas",
        descripcion:"Argolla de matrimonio de Oro Florentino estrellas 14K 6mm",
        categoria:"Argollas",
        stock:16,
        precio:7400,
        img:"https://shop.fonelli.com/cdn/shop/products/Argolla_De_Matrimonio_Oro_Amarillo_14k_5mm_Inspiraci_n_4100x.png"
    },
    {
        id:"0026",
        nombre:"Argolla De Matrimonio Oro Florentina 14K uvas",
        descripcion:"Argolla De Matrimonio Oro Florentina 14K 6mm uvas",
        categoria:"Argollas",
        stock:9,
        precio:10300,
        img:"https://shop.fonelli.com/cdn/shop/products/Argolla_De_Matrimonio_Oro_Florentina_14K_6mm-1_4100x.png"
    },
    {
        id:"0027",
        nombre:"Argolla de Matrimonio Oro Amarillo y Blanco 14k",
        descripcion:"Argolla de Matrimonio Oro Amarillo y Blanco 14k 6mm",
        categoria:"Argollas",
        stock:6,
        precio:9649,
        img:"https://shop.fonelli.com/cdn/shop/files/S79470469_4100x.jpg"
    },
    {
        id:"0028",
        nombre:"Argolla Oro Amarillo y Blanco 14k",
        descripcion:"Argolla Oro Amarillo y Blanco 14k 6mm",
        categoria:"Argollas",
        stock:2,
        precio:6600,
        img:"//shop.fonelli.com/cdn/shop/files/S79445082_4100x.jpg"
    },
    {
        id:"0031",
        nombre:"Pulsera de Oro Amarillo de 14k Troquelada",
        descripcion:"Pulsera de Oro Amarillo de 14k 4.2mm Troquelada",
        categoria:"Pulseras",
        stock:4,
        precio:11900,
        img:"https://shop.fonelli.com/cdn/shop/files/S81601207_4100x.jpg"
    },
    {
        id:"0032",
        nombre:"Pulsera de Oro Amarillo de 14k Torsal",
        descripcion:"Pulsera de Oro Amarillo de 14k 4.2mm Torsal",
        categoria:"Pulseras",
        stock:6,
        precio:10800,
        img:"https://shop.fonelli.com/cdn/shop/files/S81607936_4100x.jpg"
    },
    {
        id:"0033",
        nombre:"Pulsera de Oro Amarillo de 14k Cartier 1x1",
        descripcion:"Pulsera de Oro Amarillo de 14k Cartier 1x1",
        categoria:"Pulseras",
        stock:8,
        precio:6500,
        img:"https://shop.fonelli.com/cdn/shop/files/S81606145_4100x.jpg"
    },
]
export const getProducts = ()=>{
    return new Promise((resolve,reject) =>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay datos')
            }else{
                resolve(productos)
            }
        },3000)
    })
}