"use client";

import AboutCard from "../Cards/AboutCard";

export default function AboutUs() {
  return (
    <div
      className="flex flex-col justify-center my-3 px-3 sm:px-8 md:px-15 bg-secondary-800 py-15"
      id="about"
    >
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-background ">
          Why Carflex Plus?
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row  items-stretch justify-center">
        <AboutCard
          title="Trusted"
          description="Since 2015 we have provided a simple and easy way to sell your car ensuring your experience is seamless and satisfactory from start to finish."
        />
        <AboutCard
          title="Friendly Staff"
          description="Since 2015 we have provided a simple and easy way to sell your car ensuring your experience is seamless and satisfactory from start to finish."
        />
        <AboutCard
          title="Easy Process"
          description="Sell your car easy, safe, and stress free. We handle all the paperwork and details, so you can focus on what matters most."
        />
        <AboutCard
          title="Best Offers"
          description="We provide the best offers for your car, ensuring you get the most value for your vehicle. We provide you with a competitive offer that you can trust."
        />
      </div>
    </div>
  );
}
