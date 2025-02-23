import React from 'react';

const PhotoGrid = ({ images, onImageClick }) => {
  return (
    <div className="p-5 sm:p-8">
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer mb-8"
            onClick={() => onImageClick(index)}
          >
            <img src={image.src} alt={image.title} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
