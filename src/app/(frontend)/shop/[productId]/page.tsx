import React from 'react';

import ProductDetails from './ProductDetails';

import { getAProduct } from '@/services/getProductsApiFetch';

export const generateMetadata = async ({params}:{params:any})=>{
    const productDetails = await getAProduct(params.productId);

    return {
        title: `${productDetails.title}`,
        description: `${productDetails.description}`,
        keywords: [`test keyword`,`another`],
    }
}

const ProductDestailsPage = async ({params}:{params:any}) => {
   
    const productDetails =  await getAProduct(params.productId)
    

    

    return (
        <div className='my-10  mx-6'>
            <ProductDetails product={productDetails}/>
        </div>
    );
};

export default ProductDestailsPage;