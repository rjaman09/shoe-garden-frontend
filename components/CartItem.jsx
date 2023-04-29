/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

import { removeFromCart, updateCart } from "@/store/cartSlice";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const p = data.attributes;

  const updateCartItem = (e, key) => {
    let payload = { key, val: key === "quantity" ? parseInt(e.target.value) : e.target.value, id: data.id };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image width={120} height={120} src={p.thumbnail.data.attributes.url} alt={p.name} />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-md md:text-lg font-semibold text-black/[0.8]">
            {p.name}
          </div>

          <div className="text-[13px] md:text-[13px] font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>

          <div className="text-[13px] md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;{p.price}
          </div>
        </div>

        <div className="text-sm font-medium text-black/[0.5] hidden md:block">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black" onChange={(e) => updateCartItem(e, "selectedSize")}>
                {p.size.data.map((item, i) => {
                  return (
                    <option key={i} value={item.size} disabled={!item.enabled ? true : false} selected={data.selectedSize === item.size}>{item.size}</option>
                  )
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black" onChange={(e) => updateCartItem(e, "quantity")}>
                {Array.from({length: 10}, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} selected={data.quantity === q} value={q}>{q}</option>
                  )
                })}
              </select>
            </div>
          </div>

          <RiDeleteBin6Line onClick={() => dispatch(removeFromCart({id: data.id}))} className="cursor-pointer w-5 h-5 md:w-8 md:h-8 md:p-2 md:rounded-full md:bg-black/[0.2] text-black/[0.5] hover:text-black hover:scale-105 transition" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;