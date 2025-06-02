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

        <div className="flex-col gap-1.5 flex max-w-3xl bg-white p-9 px-16 w-3xl min-w-100">
          <p className='text-md'>Want to learn more about the language surrounding autism and the autistic community?</p>
          <h1 id='person-first' className='text-xl font-bold mt-4'><NavLink to="https://autisticadvocacy.org/about-asan/identity-first-language/" end className="hover:text-periwinkle">More about identity-first language</NavLink></h1>
          <p><NavLink to="https://autisticadvocacy.org/about-asan/identity-first-language/" end className="hover:text-periwinkle">https://autisticadvocacy.org/about-asan/identity-first-language/</NavLink></p>
          <h1 id='person-first' className='text-xl font-bold mt-4'><NavLink to="https://www.liebertpub.com/doi/10.1089/aut.2020.0014" end className="hover:text-periwinkle">Avoiding Ableist Language: Suggestions for Autism Researchers</NavLink></h1>
          <p><NavLink to="https://www.liebertpub.com/doi/10.1089/aut.2020.0014" end className="hover:text-periwinkle">https://www.liebertpub.com/doi/10.1089/aut.2020.0014</NavLink></p>
        </div>
        <div className="min-w-72"></div>
      </div>

    </div>
  ];
}
