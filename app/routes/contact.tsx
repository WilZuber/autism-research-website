import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Autism Language" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return [
    <div className="flex flex-col">


      <div className="flex-1 flex-col sticky top-0 w-screen bg-white">  {/* header */}

        <div className="flex flex-col">
          <nav className="pr-6 py-3 pl-4">
            <div className="flex flex-row">
              <nav className="w-14 flex-4"><h1 className="text-2xl text-periwinkle"><NavLink to="/" end className="hover:text-lightperiwinkle">Autism Language</NavLink></h1></nav>
              <div className="flex-1 text-xl text-right"><NavLink to="/" end className="hover:text-periwinkle">Articles</NavLink></div>
              <div className="flex-1 text-xl text-right"><NavLink to="/" end className="hover:text-periwinkle"> Resources</NavLink></div>
              <div className="flex-1 text-xl text-right"><NavLink to="/" end className="hover:text-periwinkle">About</NavLink></div>
              <div className="flex-1 text-xl text-right"><NavLink to="/" end className="hover:text-periwinkle">Contact Us</NavLink></div>
            </div>
          </nav>
          <nav className="flex-8 p-4 pl-6 bg-lightperiwinkle">
            <h1 className="text-white text-2xl text-center">Contact Us</h1>
          </nav>
        </div>
      </div>


      <div className="flex flex-row gap-5 bg-greyperiwinkle justify-center h-screen">
        
        <div className="min-w-72 mt-8">
          
        </div>

        <div className="flex-col gap-1.5 flex max-w-3xl bg-white p-9 px-16">
          <h1 id='person-first' className='text-xl font-bold mt-4'><NavLink to="/" end className="hover:text-periwinkle">Send us an email!</NavLink></h1>
          <p className='text-md'>Insert box</p>
        </div>
        <div className="min-w-72"></div>
      </div>

    </div>
  ];
}
