import { Card } from "./Card";
import { ImageCard } from "./ImageCard";
import
{
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "./images/dev-ed-wave.png";
import code from "./images/code.png";
import design from "./images/design.png";
import consulting from "./images/consulting.png";
import web1 from "./images/web1.png";
import web2 from "./images/web2.png";
import web3 from "./images/web3.png";
import web4 from "./images/web4.png";
import web5 from "./images/web5.png";
import web6 from "./images/web6.png";


export default function Home ()
{
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={ darkMode ? "dark" : "" }>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">React With Tailwindcss</h1>
            <a
              className="bg-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Elene Reach
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={ deved } layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <Card image={ design } heading="Beautiful Designs" />
            <Card image={ code } heading="Code your dream project" />
            <Card image={ consulting } heading="Consulting" />
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <ImageCard img={ web1 } />
            <ImageCard img={ web2 } />
            <ImageCard img={ web3 } />
            <ImageCard img={ web4 } />
            <ImageCard img={ web5 } />
            <ImageCard img={ web6 } />

          </div>
        </section>
      </main>
    </div>
  );
}



// import './App.css';

// function App ()
// {
//   return (
//     <div>
//       <h1 className="text-6xl font-bold underline">
//         Hello World!
//       </h1>
//     </div>
//   );
// }
// export default App;
