import React from "react";
import heroBg from "../../images/hotel4.webp";

const HeroSection = () => {
  return (
    <>
      <div
        className="hero relative overflow-hidden bg-no-repeat bg-cover w-full fixed inset-0 z-0 "
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "500px",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black bg-opacity-60">
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Your Gateway to Exceptional <br />
                <span>Hotel Experiences </span>
              </h1>
              <button
                type="button"
                className="inline-block px-7 py-3 border-2 border-hazel text-white font-medium text-sm leading-snug uppercase  rounded-lg hover:bg-hazel focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
