import ProductCard from '@/components/ui/cards/ProductCard';
import React from 'react';

const FeaturedSection = async () => {

    const  data = await fetch('https://dummyjson.com/products')
    const  posts = await data.json()
  
    return (
        <div className='my-20 container mx-auto'>
             <div className="gap-3 md:gap-4 grid grid-cols-2 sm:grid-cols-4 mx-4 md:mx-0">
    {posts.products.slice(10,18).map((item:any, index:number) => (
     
      <ProductCard item={item} index={index} />

    ))}
    </div>
        </div>
    );
};

export default FeaturedSection;