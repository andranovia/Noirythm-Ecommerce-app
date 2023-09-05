'use client';

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import CategoryItem from './Category-item';

import 'swiper/css';

SwiperCore.use([Navigation, Pagination]);

const CategoryApp = () => {
  const categories = [
    {
      image: './img/categ/all.png',
      title: 'See all',
      description: 'Where you can find all the things',
    },
    {
      image: './img/categ/cloth.png',
      title: 'Cloth',
      description: 'Explore the world of fashion',
    },
  ];

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-2 gap-5  ">
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryApp;
