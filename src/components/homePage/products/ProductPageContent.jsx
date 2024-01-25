import React from "react";

const ProductPageContent = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-10">
        Everse - John Doe
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
        Ana Sayfalar
      </h2>

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
        Bileşenler
      </h2>
      <div className="grid grid-cols-3 gap-4"></div>
    </div>
  );
};

export default ProductPageContent;
