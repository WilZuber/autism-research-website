import { NavLink } from "react-router";

export default function Navbar (props: {title: string}) {
    return <div className="flex-1 flex-col sticky top-0 w-screen bg-white justify-center">  {/* header */}

        <div className="flex flex-col">
          <nav className="pr-6 py-3 pl-4">
            <div className="flex flex-row">
              <nav className="w-14 flex-4"><h1 className="text-2xl text-periwinkle"><NavLink to="/" end className="hover:text-lightperiwinkle">Autism Language</NavLink></h1></nav>
              <div className="flex-1 text-xl text-right"><NavLink to="/articles" end className="hover:text-periwinkle">Articles</NavLink></div>
              <div className="flex-1 text-xl text-right"><NavLink to="/resources" end className="hover:text-periwinkle"> Resources</NavLink></div>
              <div className="flex-1 text-xl text-right"><NavLink to="/about" end className="hover:text-periwinkle">About</NavLink></div>
              <div className="flex-1 text-xl text-right"><NavLink to="/contact" end className="hover:text-periwinkle">Contact Us</NavLink></div>
            </div>
          </nav>
          <nav className="flex-8 p-4 pl-6 bg-lightperiwinkle">
            <h1 className="text-white text-2xl mx-20">{props.title}</h1>
          </nav>
        </div>
      </div>
}