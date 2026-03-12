"use client";

import { motion } from "framer-motion";
import AboutCard from "../Cards/AboutCard";
import HowCard from "../Cards/HowCard";

export default function AboutUs() {
  const bannerText = " Tell Us •  Verify Offer  •  Pick Up  •  Get Paid  • ";
  return (
    <>
      <div
        className="flex flex-col justify-center my-3 px-5 sm:px-8 md:px-15 bg-secondary-800 py-15"
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
            description="Our team is dedicated to providing you with a friendly and professional experience. We are here to answer your questions and guide you through the process of selling your car."
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
      <div className="flex flex-col justify-center my-3 px-5 sm:px-8 md:px-15 bg-background py-15">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 ">
            How it Works
          </h1>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <HowCard
              title="Tell Us About Your Car"
              description="Submit your car details and get an instant offer. No more haggling or waiting around."
              imgLink="/imgs/tell-us.jpg"
              imgAlt="Tell Us About Your Car"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <HowCard
              title="Verify Your Offer"
              description="We will verify your offer and schedule a convenient time to pick up your car. No more waiting around or dealing with pushy buyers."
              imgLink="/imgs/verify-offer.png"
              imgAlt="Verify Your Offer"
              isReversed
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <HowCard
              title="Pick Up and Get Paid"
              description="We will pick up your car and pay you on the spot with the payment method you prefer. No more waiting for checks to clear or dealing with unreliable buyers."
              imgLink="/imgs/pick-up.png"
              imgAlt="Pick Up and Get Paid"
            />
          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap  py-1">
        <motion.div
          className="inline-block text-secondary-800 text-2xl md:text-3xl font-bold"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 600,
              ease: "linear",
            },
          }}
        >
          {bannerText.repeat(50)}
        </motion.div>
      </div>
    </>
  );
}
