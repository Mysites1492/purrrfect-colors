import React from 'react';

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-[999]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Left Arrow */}
      <button
        className="fixed left-4 top-1/2 transform -translate-y-1/2 text-black text-4xl font-bold p-2 bg-gray-800 rounded-full z-81"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('prev');
        }}
      >
        &#10094;
      </button>

      {/* Image and Info */}
      <div className="relative z-80">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="max-w-full max-h-[90vh] pointer-events-none border-8 border-white"
        />
        <div className="text-center mt-4 text-white">
          <h2 className="text-xl font-bold">{images[currentIndex].title}</h2>
          <p className="text-lg">{images[currentIndex].price}</p>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="fixed right-4 top-1/2 transform -translate-y-1/2 text-black text-4xl font-bold p-2 bg-gray-800 rounded-full z-81"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('next');
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Lightbox;
