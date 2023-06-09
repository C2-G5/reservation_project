import React from "react";
import heroBg from "../../images/hotel4.webp";
const HeroSection = () => {
  return (
    <div>
      {" "}
      <div
        class="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url("https://i.pinimg.com/236x/00/ab/36/00ab364ecd86aa5511f63a6a8ec392a1.jpg")`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "500px",
         
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "500px",
          backgroundAttachment: "fixed",
        }}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                The best offer on the market <br />
                <span>for your business</span>
              </h1>
              <button
                type="button"
                class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
