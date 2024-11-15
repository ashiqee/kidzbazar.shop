import { title } from "@/components/primitives";
import ShopSidebar from "@/components/shared/bar/ShopSidebar";
import ProductCard from "@/components/ui/cards/ProductCard";

export default async function ShopPage() {

  const  data = await fetch('https://dummyjson.com/products')
  const  posts = await data.json()


  


  return (
    <section className="mx-8 my-10 flex gap-6">
    <ShopSidebar/>
    <div>
    <div className="border h-12 mb-6 rounded-lg">

    </div>
    <div className="gap-3 md:gap-4 grid grid-cols-2 sm:grid-cols-4 mx-4 md:mx-0">
    {posts.products.map((item:any, index:number) => (
     
      <ProductCard key={index} item={item} index={index} />

    ))}
    </div>
  
    </div>
  </section>
    
  );
}
