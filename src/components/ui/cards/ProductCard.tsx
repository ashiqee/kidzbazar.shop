'use client'
import React from 'react';
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";




const ProductCard = () => {

    const list = [
        {
          title: "Orange",
          img: "https://htmldemo.net/kidol/kidol/assets/img/shop/details/1.jpg",
          price: "105.50",
        },
        {
          title: "Tangerine",
          img: "https://htmldemo.net/kidol/kidol/assets/img/shop/details/1.jpg",
          price: "103.00",
        },
        {
          title: "Raspberry",
          img: "https://htmldemo.net/kidol/kidol/assets/img/shop/details/1.jpg",
          price: "1010.00",
        },
        {
          title: "Lemon",
          img: "https://htmldemo.net/kidol/kidol/assets/img/shop/details/1.jpg",
          price: "105.30",
        },
        {
          title: "Avocado",
          img: "https://htmldemo.net/kidol/kidol/assets/img/shop/details/1.jpg",
          price: "1015.70",
        },
        {
          title: "Lemon 2",
          img: "https://htmldemo.net/kidol/kidol/assets/img/shop/details/1.jpg",
          price: "108.00",
        },
        {
          title: "Banana",
          img: "https://htmldemo.net/kidol/kidol/assets/img/shop/details/1.jpg",
          price: "107.50",
        },
        {
          title: "Watermelon",
          img: "https://htmldemo.net/kidol/kidol/assets/img/shop/details/1.jpg",
          price: "1012.20",
        },
      ];



    return (
        <div className="gap-2 md:gap-4 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full rounded-none object-cover h-[240px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
           <div className='flex flex-col gap-1'>
           <b>{item.title}</b>
           <p className="text-default-500">৳ {item.price}</p>
           </div>
            <p className='p-2 px-4 bg-slate-400/75 rounded-md'>Add Cart</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    );
};

export default ProductCard;
