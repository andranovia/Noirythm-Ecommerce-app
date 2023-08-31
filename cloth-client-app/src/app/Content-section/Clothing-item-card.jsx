import React from 'react';

const ClothingItemCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-[30rem]">
      <div className="flex">
        <div className="flex-shrink-0">
          <img src={item.image} alt={item.name} className="h-[10rem] w-[10rem]" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-800 mt-2">Price: {item.price}</p>
          <button className="bg-orange-900 text-white px-2 py-1 mt-2 rounded">
            Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default ClothingItemCard;
