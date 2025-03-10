import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import pic from "../assets/car1.jpg"
  import pic2 from "../assets/car2.jpg";
  import pic3 from "../assets/car3.jpg"
export default function Carasoul() {
  return (
    <div className=''>
        <Carousel className="">
  <CarouselContent>
    <CarouselItem className=""><img className='w-full h-110 object-cover object-center' src={pic}></img></CarouselItem>
    <CarouselItem><img className='w-full object-cover object-center h-110' src={pic2}></img></CarouselItem>
    <CarouselItem><img className='w-full h-110 object-cover' src={pic3}></img></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="ml-20" />
  <CarouselNext className="mr-20"/>
</Carousel>
    </div>
  )
}
