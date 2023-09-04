import React from 'react';

const ClothingItemCard = ({ item }) => {
  return (
    <div className="rounded-lg flex flex-col items-start lg:w-full   ">
      <div className=" flex-shrink-0 h-[20vh] w-[20vh] lg:w-[40vh] lg:h-[40vh] ">
        <img src={item.product_image} alt={item.product_name} className="w-full h-full object-cover flex" />
      </div>
      <div className="text-start mt-4 ">
        <h4 className="text-lg font-light text-black">{item.product_name}</h4>
        <p className="text-base font-light text-black">{item.product_price}</p>
        <p className="text-base font-light text-black ">{item.product_description}</p>
      </div>
    </div>
  );
};

export default ClothingItemCard;
