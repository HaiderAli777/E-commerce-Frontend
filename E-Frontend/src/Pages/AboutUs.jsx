import React from 'react'
import aboutimage from "../assets/About1Image.jpg";
export default function AboutUs() {
  return (
    <div>
      <div className='m-10'>
        <div className='text-center text-4xl mt-8 text-purple-600 font-bold '><span className='text-purple-700'>___</span>About<span className='font-bold text-purple-600'> Us</span><span className='text-purple-700'>___</span></div>
        <div className='grid-cols-1 md:grid md:grid-cols-2 mt-12 '>
          {/* Okay so this is for images */}
          <div className='px-10 py-3 '>
            <img src={aboutimage} className='rounded-3xl h-[100%] '></img>
          </div>
          {/*this is for about text */}
          <div className='p-10'>
            <p className='text-gray-600 text-md mb-3'>HAADI was created with a vision to redefine online shopping through innovation, quality, and an unwavering commitment to 
              customer satisfaction. Our journey started with a bold ambition: to craft an exceptional platform where discovering, exploring,
               and purchasing premium products is effortless and enjoyable.
               
             </p>
             <p className='text-md text-gray-600'>  From trendsetting fashion and cutting-edge electronics to lifestyle 
               essentials and luxury finds, HAADI. curates a meticulously selected collection from the world's most trusted brands and suppliers.
                Every product is chosen with care, ensuring quality, authenticity, and excellence.</p>
           <h1 className='text-bold text-2xl font-bold my-4 text-purple-700'>Our Mission</h1>
           <p className='text-md text-gray-600'>
           At HAADI, our mission is to empower customers with choice, convenience, and confidence. We are dedicated to delivering a seamless
            shopping experience that goes beyond expectations—from intuitive browsing and secure transactions to fast, reliable delivery and 
            exceptional aftercare. With HAADI., shopping isn't just a necessity—it's an experience.
           </p>
          </div>
        </div>
        <div className='mt-10'>
          <h1 className='text-3xl text-purple-500 font-bold text-center'><span className='text-purple-700'>___</span>Why Choose Us <span className='text-purple-700'>____</span></h1>
        </div>
        <div className='grid-cols-1 md:grid md:grid-cols-3 mt-10'>
          <div className='border-1 border-purple-300 p-13 '>
          <h1 className='text-1xl text-purple-700 font-bold mb-3 '>Premimium Quality :</h1>
          <p className='text-grey-700 text-sm'>
            True quality lies in authenticity and durability. Every product is thoughtfully selected to ensure superior craftsmanship, reliability, and lasting value.
          </p>
          </div>
          <div className='border-1 border-purple-300 p-13 '>
          <h1 className='text-1xl font-bold mb-3 text-purple-700'>Affordable Cost :</h1>
          <p className='text-grey-700 text-sm'>
          Premium quality shouldn’t come at a high price. With carefully sourced products at competitive rates, excellence is made affordable without compromise.          </p>
          </div>
          <div className='border-1 border-purple-300 p-13 hover:shadow'>
            <h1 className='text-1xl font-bold mb-3  text-purple-700'>Valuable Time :</h1>
            <p className='text-grey-700 text-sm'>
            We value your time, making shopping effortless with a seamless experience, quick checkouts, and fast deliveries. Every moment matters, and convenience is key.
          </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
