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


      <Navbar title="Resources"></Navbar>


      <div className="flex flex-row gap-5 bg-greyperiwinkle justify-center h-screen">
        
        <div className="min-w-72 mt-8">
          
        </div>

        <div className="flex-col gap-1.5 flex max-w-3xl bg-white p-9 px-16">
          <h1 id='person-first' className='text-xl font-bold mt-4'><NavLink to="/" end className="hover:text-periwinkle">Some Resources</NavLink></h1>
          <p className='text-md'>Real resources</p>
          <p> Research is done about autism all of the time. It is crucially important that we understand the various language surrounding autism and autistic individuals, and how that language impacts the autistic community.</p>
        </div>
        <div className="min-w-72"></div>
      </div>

    </div>
  ];
}
