

export  const getAllProducts = async ()=>{
    
const  data = await fetch('https://dummyjson.com/products')
const  posts = await data.json()

return posts.products
}


export const getAllProductIds = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return data.products.map((product: any) => product.id);  // Extract product IDs
};


export const getAProduct = async (id:number)=>{
    const data = await fetch(`https://dummyjson.com/products/${id}`)
     const productDetails = await data.json()
     
     return productDetails;
}