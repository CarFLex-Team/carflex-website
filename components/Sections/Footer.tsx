"use client";

import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Logo from "../ClientRender/Logo";

export default function Footer() {
  return (
    <footer className=" text-secondary-800 dark:text-blue-100 py-10 px-4 md:px-15">
      <div className="flex justify-center md:justify-center border-b border-gray-700 pb-10 mb-10 mx-3">
        <Logo />
      </div>

      <div className=" w-full px-3  flex flex-col md:flex-row justify-between  gap-8 md:gap-2">
        <div className="flex flex-col space-y-2">
          <a href="#about" className="hover:text-orange-500 no-underline">
            ABOUT US
          </a>
          <a href="/faq" className="hover:text-orange-500 no-underline">
            FAQ
          </a>
          <a href="#contact" className="hover:text-orange-500 no-underline">
            CONTACT
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">CUSTOMER SERVICE</span>
          <a
            href="mailto:info@carflexplus.ca"
            className="hover:text-orange-500 no-underline"
          >
            info@carflexplus.ca
          </a>
          <a
            href="tel:(437) 505-2388"
            className="hover:text-orange-500 no-underline"
          >
            (437) 505-2388
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="mt-2">2371 Dundas Street,</span>
          <span>London, Ontario,</span>
          <span>Canada</span>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/carflexdealership/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.google.com/maps/place/Carflex/@43.0118595,-81.1505021,17z/data=!3m1!4b1!4m6!3m5!1s0x882ef320ed67b729:0x6c532153755710d0!8m2!3d43.0118595!4d-81.1479272!16s%2Fg%2F11fvw9ngy8?entry=tts&g_ep=EgoyMDI2MDMwNC4xIPu8ASoASAFQAw%3D%3D&skid=926b4620-1963-4515-9e42-2c4b384411e6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        Copyright © 2026 Carflexplus. All Rights reserved
      </div>
    </footer>
  );
}
