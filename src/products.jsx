const products = [
    {
        id: '1',
        name: 'iPhone 15 Pro',
        price: 1800000,
        category: 'celulares',
        img: 'https://cdn-ipoint.waugi.com.ar/26707-thickbox_default/iphone-15-pro-128gb.jpg',
        stock: 20,
        descripcion: 'Nuevo modelo con rendimiento avanzado, cámara de alta calidad y diseño elegante'
    },
    {
        id: '2',
        name: 'Samsung Galaxy Tab S9 Ultra',
        price: 1900000,
        category: 'computacion',
        img: 'https://image-us.samsung.com/SamsungUS/PIM/new_SDSAC-6164-TabS9_KV-Configurator-800x600_new.jpg?$product-details-jpg',
        stock: 20, 
        descripcion: 'Modelo con pantalla grande y nítida, potentes especificaciones y versatilidad'
    },
    {
        id: '3',
        name: 'Sony WH-1000XM5',
        price: 530000, 
        category: 'entretenimiento',
        img: 'https://www.lavanguardia.com/andro4all/hero/2022/05/Sony-WH-1000XM5.1652371428.8406.jpg',
        stock: 25,
        descripcion: 'Auriculares inalámbricos valorados por su excelente calidad de sonido, cancelación de ruido activa y comodidad.'  
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === productId);
            resolve(product || null);
        }, 500);
    });
};