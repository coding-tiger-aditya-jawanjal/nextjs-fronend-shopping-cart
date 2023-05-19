import Link from "next/link"


const Error = () => {
  return (
    <div>
      This is error page 
      <Link href={"/"}>
      <button className={"px-6 py-2 bg-red-300 hover:bg-slate-300 hover:cursor-pointer"}>Go to home</button>
      </Link>
    </div>
  )
}

export default Error
