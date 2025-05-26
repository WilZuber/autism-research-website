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

      <Navbar title="Welcome to Autism Language!"></Navbar>

      <div className="flex flex-row gap-5 bg-greyperiwinkle justify-center h-screen">
        
        <div className="min-w-72 mt-8"></div>

        <div className="flex-col gap-1.5 flex max-w-3xl bg-white p-9 px-16 w-3xl min-w-100">
          <h1 id='person-first' className='text-xl font-bold mt-4'>What is this website?</h1>
          <p> This is a website meant to learn more about research and discussions about autism in relation to linguistics and language.</p>

          <h1 id='identity-first' className='text-xl font-bold mt-4'>Inspiration</h1>
          <p> The author of this website found surprising findings when doing a literature review of autism technology research, revealing a potential lack of awareness on how language impacts the autistic community.</p>
          <p>They hope that by creating this website they can make sharing information about autism research and language more accessible across various domains.</p>

          <h1 id='human-avoidant' className='text-xl font-bold mt-4'>Navigation</h1>
          <p> Use the navigation bar at the top to learn more about the website, read articles written for the website, or learn about how you can support or contact the authors!</p>

          <h1 id='human-avoidant' className='text-xl font-bold mt-4'>Disclaimer</h1>
          <p> The author of this website does not claim to be the end-all-be-all on how to conduct autism research.</p>
        </div>
        <div className="min-w-72"></div>
      </div>

    </div>
  ];
}
