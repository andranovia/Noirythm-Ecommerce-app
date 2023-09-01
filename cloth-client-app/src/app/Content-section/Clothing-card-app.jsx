import React from "react";
import ClothingItemCard from "./Clothing-item-card";

const ClothingCardComponent = () => {
  const clothingItems = [
    {
      name: "T-Shirt",
      price: "$20",
      image: "./img/card/card-2.jpg",
      description: "A comfortable and stylish t-shirt.",
    },
    {
      name: "Modern Cloth",
      price: "$40",
      image: "./img/card/card-1.jpg",
      description: "Classic cultural cloth with modern style.",
    },

    {
        name: "Modern Sweater",
        price: "20$",
        image: "./img/card/card-3.jpg",
        description: "Modern stylish sweater design"
    },
    {
        
        name: "Modern Sweater",
        price: "20$",
        image: "./img/card/card-4.jpg",
        description: "Modern stylish sweater design"

    },
  ];

  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {clothingItems.map((item, index) => (
        <ClothingItemCard key={index} item={item} />
      ))}
    </div>
  </div>
  
  
  
  );
};

export default ClothingCardComponent;
