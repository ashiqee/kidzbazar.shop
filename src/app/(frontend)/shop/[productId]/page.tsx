import React from 'react';
import ProductDetails from './ProductDetails';

const ProductDestailsPage = async ({params}:{params:any}) => {
   
    
  const  data = await fetch('https://dummyjson.com/products')
  const  posts = await data.json()
    

    return (
        <div>
            <ProductDetails product={posts.products[params.productId]}/>
        </div>
    );
};

export default ProductDestailsPage;