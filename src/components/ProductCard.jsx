import { add,remove } from "../store/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import {  useEffect } from "react";
import { useState } from "react";



export const ProductCard = ({ product }) => {
  const { id,name, price, image } = product;
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartstate.cartList);
  useEffect(() => {
    const productInCart = cartList.find(item => item.id === id);
    if (productInCart) {
      setIsInCart(true); 
    }else {
      setIsInCart(false);
    }
  }
  , [cartList, id]);


  return (
    <div className="w-[350px] shadow-md rounded-md m-2 p-3 flex flex-col justify-between">
      <img src={image} alt={name} className="w-full h-[250px] object-cover my-2" />
      <p className="my-2 text-lg font-medium">{name}</p>
      <div className="flex justify-between items-center my-2">
        <p className="text-lg font-medium">${price}</p>
        <div className="flex gap-2">

        {isInCart ? (
          <button onClick={()=>dispatch(remove(product))} className="bg-red-700 text-white text-base px-4 py-2 rounded hover:bg-red-900 max-w-[150px]">
            Remove
          </button>
        ) : ( 
          <button onClick={()=>dispatch(add(product))} className="bg-blue-700 text-white text-base px-4 py-2 rounded hover:bg-blue-900 max-w-[150px]">
            Add To Cart
          </button>
        )}
        </div>
      </div>
    </div>
  );
};
