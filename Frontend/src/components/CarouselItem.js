import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./../assets/bg.jpg"
import img2 from "./../assets/iut_cs_black.jpg"
import img3 from "./../assets/iut_cs_white.jpg"
const CarouselItem = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
      <Carousel className='h-[60vh] w-[70vw] mx-auto rounded-lg mt-4' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='h-[60vh] w-[70vw] rounded-lg' src={img1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='h-[60vh] w-[70vw] rounded-lg' src={img2} rounded-lg/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='h-[60vh] w-[70vw] rounded-lg' src={img3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default CarouselItem;