import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:py-10 md:py-15 lg:py-20">
      <div className="px-2 sm:px-0 text-center mb-5 sm:mb-10 lg:mb-15">
        <h3 className="text-2xl font-extrabold">Gadget Heaven</h3>
        <p className="text-sm font-semibold">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr />
      <div className="footer px-4 sm:px-8 md:px-0 block md:grid space-y-4 items-baseline  justify-evenly">
        <div className="">
          <h6 className="footer-title mb-0 sm:text-lg font-extrabold opacity-100">
            Services
          </h6>
          <a className="link text-xs sm:text-sm link-hover">Branding</a>
          <a className="link text-xs sm:text-sm link-hover">Design</a>
          <a className="link text-xs sm:text-sm link-hover">Marketing</a>
          <a className="link text-xs sm:text-sm link-hover">Advertisement</a>
        </div>
        <div>
          <h6 className="footer-title mb-0 sm:text-lg  font-extrabold opacity-100">
            Company
          </h6>
          <a className="link text-xs sm:text-sm link-hover">About us</a>
          <a className="link text-xs sm:text-sm link-hover">Contact</a>
          <a className="link text-xs sm:text-sm link-hover">Jobs</a>
          <a className="link text-xs sm:text-sm link-hover">Press kit</a>
        </div>
        <div>
          <h6 className="footer-title mb-0 sm:text-lg font-extrabold opacity-100">
            Legal
          </h6>
          <a className="link text-xs sm:text-sm link-hover">Terms of use</a>
          <a className="link text-xs sm:text-sm link-hover">Privacy policy</a>
          <a className="link text-xs sm:text-sm link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="mt-[40px] text-center">
        @2024 Gadgets Heaven All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
