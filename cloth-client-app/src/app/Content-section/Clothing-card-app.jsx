'use client'

import React, { useEffect, useState } from 'react';
import axiosInstance from './utils/api'; // Import the Axios instance from api.js
import ClothingItemCard from './Clothing-item-card';


const ClothingCardComponent = () => {
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {

    axiosInstance.get('/api/products') 
      .then((response) => {
        setClothingItems(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching clothing items:', error);
      });
  }, []);
  

  return (
    <div className="flex justify-center ">
      <div className="grid gap-[3vh] grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-0">
        {clothingItems.map((item, index) => (
          <ClothingItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ClothingCardComponent;
