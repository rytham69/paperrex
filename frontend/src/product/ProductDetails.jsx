import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("initialData");
    if (stored) {
      const products = JSON.parse(stored);
      const found = products.find(p => p.id === id);
      setProduct(found);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Product not found or data not initialized.
      </div>
    );
  }

  return (
    <div className="min-h-screen w-[100vw] bg-[#0f0f0f] flex items-center justify-center px-6 py-12 overflow-auto ">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain rounded-xl shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">{product.description}</p>
          <p className="text-2xl text-green-600 font-bold mb-8">₹ {product.price}</p>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
