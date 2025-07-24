import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import initialData from './../product/productdata';

const Products = () => {

  const navigate =useNavigate();
    const [products, setproducts] = useState([]);
  useEffect(() => {
    let stored = localStorage.getItem("initialData");

    if (!stored) {
      const updatedProducts = initialData.map(p => ({ ...p, id: nanoid() }));
      localStorage.setItem("initialData", JSON.stringify(updatedProducts));
      setproducts(updatedProducts);
    } else {
      setproducts(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen w-[100vw] bg-[#0f0f0f] px-8 py-10 100 ">
      <div className='flex items-center justify-center mb-10'><h2 className='text-[#ff0099] text-5xl font-bold' >Our Products</h2></div>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white ounded shadow-md p-4 w-[250px] flex flex-col items-center "
            onClick={()=>navigate(`/products/${product.id}`)}

          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full outline-1 h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-4 text-center">{product.name}</h2>
            <p className="text-green-600 font-bold text-md mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
