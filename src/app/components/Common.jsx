import Image from "next/image";
import Link from "next/link";
import React from "react";

const Common = ({ title }) => {
  return (
    <div className=" mt-10 h-auto border-y-2 border-violet-600 flex justify-center items-center">
      <div className="  flex flex-wrap justify-center">
        <div className="flex flex-col max-w-sm justify-between mr-20 mb-10">
          <h2 className="mt-7 font-bold text-3xl">{title}</h2>
          <p className="mt-7 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            mollitia itaque, quos adipisci sapiente provident fugit molestias
            minima veritatis delectus possimus est! Possimus odit qui numquam,
            adipisci laborum ea officiis rem incidunt ullam. Fugiat consectetur
            animi molestiae veniam ab hic harum vitae mollitia illum explicabo,
            ea sunt, voluptatem, praesentium aperiam.
          </p>
          <Link href="/products">
            <button className=" bg-red-400 px-4 py-2 w-44 hover:bg-slate-200 hover:cursor-pointer mt-7 ">
              Products
            </button>
          </Link>
        </div>
        <Image src="/phone.png" alt={"pic"} width={450} height={80} />
        
      </div>
      <div className=" absolute bottom-10 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      
    </div>
  );
};

export default Common;
