import React from 'react';

const Category = ({ onSelectCategory, selectedCategory, activeCategory }) => {

  return (
    <div className='mb-8 mx-auto lg:space-x-16  border-b-2 py-5 text-gray-900 items-center font-semibold justify-center flex'>
      <button
        onClick={() => onSelectCategory(null)}
        className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}
      >
        All
      </button>
      {activeCategory.map((category ,i) => (
        <button
          onClick={() => onSelectCategory(category)}
          className={`ml-2 space-x-16 inline-flex ${
            activeCategory === category ? "active-button" : ""
          }`}
          key={i}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
