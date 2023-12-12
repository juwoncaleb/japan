import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      <div className=" flex justify-between desk">
        <div className="flex justify-between">
          <p className="header_element">MENU</p>
          <p className="header_element">BOOKINGS</p>
          <p className="header_element">FOR GUEST</p>
        </div>
        <img className="logo" src="./lg5.png" />
        <div className="flex justify-around">
          <p className="header_element">OUR STORY</p>
          <p className="header_element">CONTACT-US</p>
          <p className="header_element">1</p>
        </div>
      </div>
        <div className="flex mob mr-4 justify-between">
          <img className="logo" src="./lg5.png" />

          <div className="mt-5">
            {/* Hamburger Menu */}
            {isMenuOpen === true ? (
              <div onClick={toggleMenu}>
                <img
                className="close-icon"
                  width="50"
                  height="70"
                  src="https://img.icons8.com/ios/50/multiply.png"
                  alt="multiply"
                />
              </div>
            ) : (
              <div onClick={toggleMenu}>
                <img
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/menu--v7.png"
                  alt="menu--v7"
                />
              </div>
            )}
          </div>
        </div>
        {isMenuOpen && (
        <div className="text-right mr-4">
          <Link href="./">
            <p className="head_ele tag mt-10"> Home</p>
          </Link>
          <Link href="./menu">
            <p className="head_ele tag mt-10"> Menu</p>
          </Link>
          <Link href="./booking">
            <p className="head_ele tag mt-10"> Booking </p>
          </Link>
          <Link href="./story">
            <p className="head_ele tag mt-10"> Story</p>
          </Link>
          <Link href="./guest">
            <p className="head_ele tag mt-10"> Guest</p>
          </Link>
        
        </div>
      )}
    </div>
  );
}
