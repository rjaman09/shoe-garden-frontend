/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images.map((img) => (
          <img key={img.id} src={img.attributes.url} alt={img.attributes.name} />
        ))}
        {/* <img src="/p1.png" alt="Product Images" />
        <img src="/p2.png" alt="Product Images" />
        <img src="/p3.png" alt="Product Images" />
        <img src="/p4.png" alt="Product Images" />
        <img src="/p5.png" alt="Product Images" />
        <img src="/p6.png" alt="Product Images" />
        <img src="/p7.png" alt="Product Images" /> */}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;