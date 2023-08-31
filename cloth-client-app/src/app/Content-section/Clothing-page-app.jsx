import React from 'react';
import ClothingItemCard from './Clothing-item-card';

const ClothingPage = () => {
  const clothingItems = [

    {
      name: 'T-Shirt',
      price: '$20',
      image: './img/card/card-2.jpg',
      description: 'A comfortable and stylish t-shirt for any occasion.',
    },
    {
      name: 'Modern Cloth',
      price: '$40',
      image: './img/card/card-1.jpg',
      description: 'Classic cultural cloth with modern style.',
    },

  ];

  return (
    <div className="flex justify-center">
        <div className='flex justify-center'>
      {clothingItems.map((item, index) => (
        <ClothingItemCard key={index} item={item} />
      ))}
      </div>
    </div>
  );
};

export default ClothingPage;
