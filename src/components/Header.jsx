import React from "react";
import { VscAccount } from "react-icons/vsc";

function Header() {
  return (
    <>
      <header
        className="bg-cover bg-center h-screen relative"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* text above image and in center */}
        <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white ">
          <p className="text-3xl">_____ We are offering the</p>
          <h1 className="text-6xl">Best Real Estate Deals</h1>
          <p className=" w-3/4 text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className=" bg-green-600 rounded-lg p-4 mt-3">
            More Details
          </button>
        </div>
      </header>
      <nav className="flex justify-between p-5 text-xl bg-transparent absolute top-0 w-full z-10">
        {/* Navigation links */}
        <h2 className="text-green-500">Trophy Nig</h2>
        <ul className="flex gap-5 text-green-600 text-center ">
          <li>
            <a href="#featured">Home</a>
          </li>
          <li>
            <a href="#designer">Properties</a>
          </li>
          <li>
            <a href="#top-rated">Designs</a>
          </li>
          <li>
            <a href="#top-rated">Search</a>
          </li>
          <li>
            <a href="#top-rated">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>

          <li>
            <a href="#account" className=" ">
              <VscAccount size={30} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
