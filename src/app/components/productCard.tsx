"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MockProduct } from "./productList";

const ProductCard = ({ product }: { product: MockProduct }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    // <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col border border-gray-200 w-72 h-96">
      <div className="relative w-full h-40 mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 w-full object-cover rounded-md mb-4"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800">
        {product.title.length > 22
          ? `${product.title.slice(0, 22)}...`
          : product.title}
      </h2>

      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600">Price: ${product.price}</p>
      <p> ⭐ {product.rating}</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleViewDetails}
      >
        View Details
      </button>
    </div>
  );
};
// Eyeshadow Palette with
export default ProductCard;
