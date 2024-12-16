const url = 'https://fakestoreapi.com/products'

export const products = async () => {
    try{
        const response = await fetch(url);
        const productos = await response.json();

        return productos.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            images: product.image,
            category: product.category,
            rating: [
                 product.rating.rate,
                product.rating.count
            ]
        }))
    }catch(e){
        throw new Error(e.message);
    }
}

export default products;