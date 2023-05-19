import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-wrap justify-center sm:justify-between px-10 border-b-2 border-black h-28 items-center ">
      <div className=" font-bold font-sans text-indigo-500 text-4xl">
        Shopping Mart
      </div>
      <div className=" flex ">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Contact", "/contact"],
          ["Products", "/products"],
        ].map(([title, link]) => {
          return (
            <Link href={link} className="mr-5">
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
