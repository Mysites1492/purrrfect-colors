import React from 'react';

const pricingData = [
  {
    category: "Grayscale Portraits",
    items: [
      { size: '5x7 inches', price: '$175.00' },
      { size: '8x10 inches', price: '$200.00' },
      { size: '11x14 inches', price: '$250.00' },
      { size: '16x20 inches', price: '$500.00' },
    ],
  },
  {
    category: "Colorful Portraits",
    items: [
      { size: '5x7 inches', price: '$275.00' },
      { size: '8x10 inches', price: '$370.00' },
      { size: '11x14 inches', price: '$450.00' },
      { size: '16x20 inches', price: '$700.00' },
    ],
  },
];
function PricingChart() {
  return (
    <div className="pricing-grid">
      {pricingData.map(({ category, items }, categoryIndex) => (
        <div
          key={categoryIndex}
          className="pricing-card"
        >
          <h2>
            {category}
          </h2>
          {items.map(({ size, price }, itemIndex) => (
            <div
              key={itemIndex}
              className="pricing-item"
            >
              <span>{size}</span>
              <span className="pricing-price">
                {price}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PricingChart;