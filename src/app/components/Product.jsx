import Image from "next/image";
import Link from "next/link";

const Product = ({ item }) => {
  return (
    <div className=" mr-5 mb-5 border-2 border-red-400 p-2 w-72 h-96 flex flex-col">
      <h4 className=" text-center ">{`${item.title.substring(0, 25)}...`} </h4>
      <Image
        src={item.image}
        alt={"pic"}
        width={100}
        height={100}
        className="mt-2 self-center w-32 h-32"
      />
      <p className="mt-2 text-justify">
        {`${item.description.substring(0, 75)}...`}
        <Link href={`/products/${item.id}`}>
        <span className=" text-red-500 text-md border-blue-500 border-b-2 hover:cursor-pointer">
          Read More
        </span>
        </Link>
      </p>
      <div className="flex justify-between items-center mt-6">
        <button className=" bg-blue-300 px-3 py-2 ">Price : $500</button>
        <button className=" bg-blue-300 px-3 py-2 ">Qty : 1</button>
      </div>
      <button className=" mt-2 bg-red-300 px-3 py-2 hover:bg-slate-200 hover:cursor-pointer">
        Add to Cart (1)
      </button>
    </div>
  );
};

export default Product;
