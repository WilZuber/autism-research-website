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

      <Navbar title="Language Around Autism - A Guide by Wilson Zuber"></Navbar>

      <div className="flex flex-row gap-5 bg-greyperiwinkle justify-center h-screen">
        
        <div className="min-w-72 mt-8">
          <div className="rounded-4xl bg-white py-7 p-5 fixed">
            <h1 className="text-xl font-bold text-blackperiwinkle">Contents</h1>
            <h2><NavLink to="/language-around-autism" end className="hover:text-periwinkle">Person-first Language</NavLink></h2>
            <h2><NavLink to="#identity-first" end className="hover:text-periwinkle">Identity-first Language</NavLink></h2>
            <h2><NavLink to="#human-avoidant" end className="hover:text-periwinkle">Human-avoidant Language</NavLink></h2>
          </div>
        </div>

        <div className="flex-col gap-1.5 flex max-w-3xl bg-white p-9 px-16 w-3xl min-w-100">
          <h1 id='person-first' className='text-xl font-bold mt-4'>Person-first Language</h1>
          <p className='text-center'>“Person with autism” &mdash; “Child with autism” &mdash; “Diagnosed with autism”</p>
          <p> Person-first language places autism as something that a person has, rather than a core part of someone’s identity.
            Some individuals on the spectrum may prefer this language choice because they see themselves as separate from their autism.</p>

          <h1 id='identity-first' className='text-xl font-bold mt-4'>Identity-first Language</h1>
          <p className='text-center'>“Autistic person” &mdash; “Autistic child” &mdash; “Diagnosed as autistic”</p>
          <p> Identity-first language places autism as a core part of who someone is.
            Some individuals on the spectrum may prefer this language choice because they see autism as a core part of their identity.</p>

          <h1 id='human-avoidant' className='text-xl font-bold mt-4'>Human-Avoidant Language</h1>
          <p className='text-center'>"Autism Cases" &mdash; "ASD Cases" &mdash; "Prevalence of Autism"</p>
          <p>There is no clear consensus on which language type is best in academic writing.
            Some authors use person-first because it is the standard, others use identity-first to follow insights from the neurodiversity movement.
            Even within the autistic community there no one way that all autistic individuals prefer to be referred to as.
            As such, some researchers and writers may be tempted to leave these terms out altogether, opting to not refer to the individuals at all.
            This is most often the case in medical-centered writing.
            While its okay to use these terms when referring to autism in the abstract, its important when conducting research with the aim to benefit autistic individuals that we center the human lives that are being impacted by the research goals.
            Not only is this true because it may help researchers better align their work towards keeping autistic individuals in mind, but also because language use about groups of individuals can have a large impact on how they feel they are seen by the world.
          </p>
        </div>
        <div className="min-w-72"></div>
      </div>

    </div>
  ];
}
