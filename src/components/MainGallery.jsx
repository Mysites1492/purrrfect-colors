import React, { useState } from 'react';
import PhotoGrid from './PhotoGrid';
import Lightbox from './Lightbox';

const images = [
  { src: `${import.meta.env.BASE_URL}images/portrait_charcoal.jpg`, title: 'Senior Photo', medium: 'charcoal', price: '$200' },
  { src: `${import.meta.env.BASE_URL}images/portrait_prismacolor.jpg`, title: 'Looking Away', medium: 'prismacolor pencils', price: '$350' },
  { src: `${import.meta.env.BASE_URL}images/portrait_babyBG.jpg`, title: 'Happy Baby Portrait', medium: 'pencil', price: '$185' },
  { src: `${import.meta.env.BASE_URL}images/portrait2_prismacolor.jpg`, title: 'Precious Sisters', medium: 'prismacolor pencils', price: '$500' },
  { src: `${import.meta.env.BASE_URL}images/portrait_sketch.jpg`, title: 'Live Portrait Drawing', medium: 'pencil', price: '$185' },
  { src: `${import.meta.env.BASE_URL}images/pet_cat1.jpg`, title: 'Caddy', medium: 'prismacolor pencils', price: '$175' },
  { src: `${import.meta.env.BASE_URL}images/pet_cat2.jpg`, title: 'Felix', medium: 'prismacolor pencils', price: '$175' },
  { src: `${import.meta.env.BASE_URL}images/pet_cat3.jpg`, title: 'Wiskers', medium: 'prismacolor pencils', price: '$175' },
];


const App = () => {
  const [lightbox, setLightbox] = useState({ open: false, currentIndex: null });

  const openLightbox = (index) => setLightbox({ open: true, currentIndex: index });
  const closeLightbox = () => setLightbox({ open: false, currentIndex: null });

  const handleNavigate = (direction) => {
    setLightbox((prev) => {
      const newIndex =
        direction === 'prev'
          ? (prev.currentIndex - 1 + images.length) % images.length
          : (prev.currentIndex + 1) % images.length;
      return { ...prev, currentIndex: newIndex };
    });
  };

  return (
    <div>
      <h1 className="text-center text-4xl my-8 chewy">Art Gallery</h1>
      <PhotoGrid images={images} onImageClick={openLightbox} />
      <Lightbox
        images={images}
        currentIndex={lightbox.currentIndex}
        onClose={closeLightbox}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;
