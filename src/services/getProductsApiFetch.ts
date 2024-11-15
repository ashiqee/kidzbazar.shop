

export  const getAllProducts = async ()=>{
    
const  data = await fetch('https://dummyjson.com/products')
const  posts = await data.json()

return posts.products
}



export const getAProduct = async (id:number)=>{
    const data = await fetch(`https://dummyjson.com/products/${id}`)
     const productDetails = await data.json()
     
     return productDetails;
}