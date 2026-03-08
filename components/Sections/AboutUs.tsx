"use client";

import AboutCard from "../Cards/AboutCard";

export default function AboutUs() {
  return (
    <>
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
      <div className="flex flex-col justify-center my-3 px-3 sm:px-8 md:px-15 bg-background py-15">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 ">
            How it Works
          </h1>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className="flex flex-col md:flex-row  w-full items-center justify-center gap-15 my-10">
            <div className="md:w-1/2 w-full">
              <p className="text-gray-700 text-2xl font-bold  ">
                Tell Us About Your Car
              </p>
              <p className="text-gray-700 text-md  ">
                Submit your car details and get an instant offer. No more
                haggling or waiting around.
              </p>
            </div>
            <img
              src="/imgs/tell-us.jpg"
              alt="How it Works"
              className="max-w-2/3 md:max-w-1/3 h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse  w-full items-center justify-center gap-15 my-10">
            <div className="md:w-1/2 w-full">
              <p className="text-gray-700 text-2xl font-bold  ">
                Verify Your Offer
              </p>
              <p className="text-gray-700 text-md  ">
                We will verify your offer and schedule a convenient time to pick
                up your car. No more waiting around or dealing with pushy
                buyers.
              </p>
            </div>
            <img
              src="/imgs/verify-offer.png"
              alt="How it Works"
              className="max-w-2/3 md:max-w-1/3 h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col md:flex-row  w-full items-center justify-center gap-15 my-10">
            <div className="md:w-1/2 w-full">
              <p className="text-gray-700 text-2xl font-bold  ">
                Pick Up and Get Paid
              </p>
              <p className="text-gray-700 text-md  ">
                We will pick up your car and pay you on the spot with the
                payment method you prefer. No more waiting for checks to clear
                or dealing with unreliable buyers.
              </p>
            </div>
            <img
              src="/imgs/pick-up.png"
              alt="How it Works"
              className="max-w-2/3 md:max-w-1/3 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
