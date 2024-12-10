import React from "react";

const Header = () => {
  return (
    <header className="relative">
      <div className="px-2 sm:px-16 md:px-24 lg:px-32 hero w-full bg-purple-600 text-white pt-4 pb-[140px] sm:pb-[160px] md:pb-[220px] lg:pb-[270px] mb-40 sm:mb-56 md:mb-70 lg:mb-[270px] ">
        <div className="hero-content text-center">
          <div className=" max-w-full space-y-3 sm:space-x-4 md:space-y-5 lg:space-x-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <h5 className="text-sm md:text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart device to the coolest accessories, we have
              it all!
            </h5>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="absolute w-[350px] sm:w-[450px] md:w-[550px] lg:w-[650px]  mx-auto bottom-[-110px] sm:bottom-[-180px] md:bottom-[-190px] lg:bottom-[-220px] p-2 sm:p-3 md:p-4  border-4 rounded-3xl border-gray-300 ">
          <img
            src="/pic/banner.jpg"
            className="rounded-2xl "
            alt="banner image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
