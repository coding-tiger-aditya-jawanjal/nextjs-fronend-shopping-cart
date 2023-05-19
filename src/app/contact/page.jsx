"use client"

import { useState } from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [message , setMessage] = useState();

  const handleSubmit = () =>{
    const data = {
      name:name,
      email:email,
      message:message
    }
    console.log(data);
  }

  return (
    <div className="mb-14">
      <div className=" p-5 flex flex-wrap w-fit ml-auto mr-auto">
        <div className="border-2 rounded-lg border-slate-500 p-5 shadow-lg shadow-slate-600 flex flex-col justify-between items-center w-56 h-48 hover:cursor-pointer hover:size-1.1rem">
          <h5>Email</h5>
          <MdEmail style={{ width: "80px", height: "80px" }} />
          <a href="mailto:adityajawanjal01@gmail.com">
            <button className="bg-blue-300 px-3 py-1 hover:bg-red-400 hover:cursor-pointer">Send Mail</button>
          </a>
        </div>
      </div>
      <div className={"mt-14 w-fit ml-auto mr-auto "}>
        <h4 className=" text-2xl font-bold">
          Contact Form
        </h4>
        <div className="flex flex-col mt-5 h-96 justify-evenly">
          <input type="text" name="name" id="name" className=" border-2 border-blue-950 h-10 p-1" placeholder="Enter Name..." onChange={(e)=>setName(e.target.value)} />
          <input type="email" name="email" id="email" className=" border-2 border-blue-950 h-10 p-1" placeholder="Enter Email..." onChange={(e)=>setEmail(e.target.value)} />
          <textarea name="msg" id="msg" cols="30" rows="10" className=" border-2 border-blue-950 h-10 p-1" placeholder="Message..." onChange={(e)=>setMessage(e.target.value)} ></textarea>
          <button type="submit" className=" bg-blue-300 px-3 py-2 hover:cursor-pointer hover:bg-slate-400"  onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </div>

  );
};

export default Contact;
