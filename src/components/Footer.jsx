// components/Footer.js

import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-green-500 h-96 py-10 px-20 flex justify-between text-white text-lg mt-10">
      <div className="flex gap-2 flex-col">
        <h2>Trophy Nig.</h2>
        <p>Follow us on:</p>
        <div className="flex">
          <CiFacebook size={30} />
          <CiInstagram size={30} />
          <CiTwitter size={30} />
        </div>
        <p>abc@gmail.com</p>
        <p>+913483835357</p>
        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486.</p>
      </div>
      <div className="flex gap-2 flex-col">
        <h2>Company</h2>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Pricing</li>
          <li>T&C</li>
          <li>Report A Problem</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter Your Email Address"
          className="p-3 rounded-md"
        />
        <button className="p-3 rounded-md text-black bg-white">
          Subscribe To{" "}
          <span className="text-green-600 font-bold"> NewsLetter </span>{" "}
          <span>{">>"}</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
