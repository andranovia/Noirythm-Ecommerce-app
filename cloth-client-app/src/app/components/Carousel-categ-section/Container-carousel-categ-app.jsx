import React from 'react';
import CarouselApp from '../Carousel-content-section/Carousel-image-page-app';
import CategoryApp from '../Categoriees-content-section/Category-app';

export default function ContainerCarouselCateg() {
  return (
    <div className="sm:flex sm:justify-center mb-10">
      <div className="sm:grid sm:grid-cols-2 sm:w-[full] ">
        <CarouselApp />
        <div className='flex flex-col justify-center'>
        <CategoryApp />
        </div>
      </div>
    </div>
  );
}
