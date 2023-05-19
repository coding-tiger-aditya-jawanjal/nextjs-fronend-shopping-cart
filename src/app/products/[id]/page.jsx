import Image from "next/image";

const SingleProduct = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();

  return (
    <div className=" flex flex-col items-start mt-24 mb-20 pl-10 ">
      <h2 className=" text-violet-900 text-4xl border-b-2 pb-2 border-black font-bold">{`Products / ${data.category}`}</h2>
      <div className="flex flex-wrap items-center justify-between self-center  mt-10 border-red-300 border-2 p-5">
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={400}
          className=" lg:mr-10 w-96 h-96 mb-10 ml-auto mr-auto"
        />

        <div className="flex flex-col w-96 ml-auto mr-auto ">
          <h3 className={" text-2xl font-bold "}>{data.title}</h3>
          <p className={"mt-5"}>{data.description}</p>
          <div className={"mt-5 flex justify-between w-3/4 items-center "}>
            <button className=" bg-red-200 px-4 py-2">
              Price : ${data.price}
            </button>
            <p>Qty : 10</p>
          </div>
          <button className="mt-5 bg-blue-300 px-4 py-2 hover:bg-slate-200 hover:cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
