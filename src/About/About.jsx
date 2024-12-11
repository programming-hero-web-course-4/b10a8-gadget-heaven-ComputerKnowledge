import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven || About</title>
      </Helmet>
      <div className="text-center space-x-4 py-8   bg-purple-600">
        <h3 className="text-2xl text-white lg:text-3xl font-bold">
          We are Gadget Heaven
        </h3>
        <p className="text-white text-sm lg:text-lg py-2">
          A retail shop of latest smart gadgets. Here you can explore the latest
          gadgets that will take your experience to the next level. From smart
          device to the coolest accessories, we have it all!
        </p>
        <p className="text-white text-sm lg:text-lg py-2">
          You can visit any of our outlet whenever you want.
        </p>
        <p className="text-white text-sm lg:text-lg py-2">
          We serve you the best price all the time.
        </p>
      </div>
    </div>
  );
};

export default About;
