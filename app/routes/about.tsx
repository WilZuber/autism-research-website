import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import { Welcome } from "../welcome/welcome";
import Navbar from "../components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Autism Language" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return [
    <div className="flex flex-col">

      <Navbar title="About"></Navbar>


      <div className="flex flex-row gap-5 bg-greyperiwinkle justify-center h-screen">
        
        <div className="min-w-72 mt-8">
          
        </div>
        <div className="flex flex-row bg-white">
          <div><img className="w-60 h-60 ml-10 m-6" src="../public/wil.jpg" alt=""></img></div>
          <div className="flex-col gap-1.5 flex max-w-116 bg-white p-9 w-3xl min-w-100">
            <h1 id='person-first' className='text-xl font-bold mt-4'><NavLink to="/" end className="hover:text-periwinkle">Wilson Zuber</NavLink></h1>
            <p className='text-md'>Web author</p>
            <p>Undergraduate researcher studying computer science and linguistics at Western Washington University. </p>
          </div>
        </div>
        <div className="min-w-72"></div>
      </div>

    </div>
  ];
}
