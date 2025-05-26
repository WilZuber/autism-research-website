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


      <div className="flex-1 flex-col fixed top-0 w-screen bg-white">  {/* header */}

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
            <h1 className="text-white text-2xl">Language Around Autism - A Guide by Wilson Zuber</h1>
          </nav>
        </div>
      </div>

      <div className="flex p-14"></div>


      <div className="flex flex-row bg-greyperiwinkle h-screen">

        <div className='flex-1'></div>
        <div className="flex-1">
          <div className="py-7">
            <h1 className="text-xl font-bold text-blackperiwinkle">Contents</h1>
            <h2>Person-first Language</h2>
            <h2>Identity-first Language</h2>
            <h2>Human-avoidant Language</h2>
          </div>
        </div>

        <div className="flex-2 bg-white p-9 px-16">
          <h1 className='text-xl font-bold'>Person-first Language</h1>
          <p className='text-center'>“Person with autism” &mdash; “Child with autism” &mdash; “Diagnosed with autism”</p>
          <p> Person-first language places autism as something that a person has, rather than a core part of someone’s identity.
            Some individuals on the spectrum may prefer this language choice because they see themselves as separate from their autism.</p>

          <h1 className='text-xl font-bold'>Identity-first Language</h1>
          <p className='text-center'>“Autistic person” &mdash; “Autistic child” &mdash; “Diagnosed as autistic”</p>
          <p> Identity-first language places autism as a core part of who someone is.
            Some individuals on the spectrum may prefer this language choice because they see autism as a core part of their identity.</p>

          <h1 className='text-xl font-bold'>Human-Avoidant Language</h1>
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

        <div className="flex-1"></div>
        <div className='flex-1'></div>

      </div>

    </div>
  ];
}
