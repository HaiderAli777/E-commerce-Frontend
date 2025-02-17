import React from "react";

export default function () {
  return (
    <div className="bg-purple-200 flex flex-col md:flex-row fixed bottom-0 h-[15rem]">
      <div className=" flex text-center md:text-left flex-col md:w-[50%]  p-10 font-light">
        <h1 className="text-4xl text-purple-800 mb-5 justify-start font-bold">
          HAA<span className="text-purple-400">DI.</span>
        </h1>
        <p>
          HAADI is a contemporary clothing brand that blends elegance with
          modern trends, offering premium-quality fashion for those who seek
          sophistication in every outfit. Designed for individuals who value
          comfort, confidence, and timeless style, HAADI crafts each piece with
          precision, ensuring a perfect balance of luxury and everyday wear.
        </p>
      </div>
      <div className="flex flex-col text-center md:text-left p-10 font-light md:w-[20%]">
        <p className="text-4xl mb-4  text-purple-800 font-medium">Company</p>

        <div className="ml-2">
          <p>Home</p>
          <p>Delivery</p>
          <p>About</p>
          <p>Conatct</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col text-center md:text-left  p-10 font-light">
        <p className="text-4xl mb-4  text-purple-800 font-medium">
          Get In Touch
        </p>
        <div className="ml-2">
          <p>0305-4935143</p>
          <p>ha7325897@gmail.com</p>
          <p>linkdin</p>
        </div>
      </div>
    </div>
  );
}
