import React from 'react';

const ClothingItemCard = ({ item }) => {
  return (
    <div className="rounded-lg flex flex-col items-start">
      <div className="w-[390px] h-[390px] flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover flex" />
      </div>
      <div className="text-start mt-4 pl-10">
        <h4 className="text-lg font-light text-black">{item.name}</h4>
        <p className="text-base font-light text-black">{item.price}</p>
        <p className="text-base font-light text-black">{item.description}</p>
      </div>
    </div>

  
  );
};

export default ClothingItemCard;
