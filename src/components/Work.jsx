import React from "react";

// Importin Images
import Fullstack from '../workimg/fullstack.jpg';
import SqlLibrary from '../workimg/sql.png';
import WordHunter from '../workimg/wordHunter.jpg';
import DataPag from '../workimg/2.data-pagination-and-filtering.jpg';
import FormRes from '../workimg/responsiveForm.png';
import Gallery from "../workimg/gallery.png";

const Work = () => {
  return (
    <div name="work" className="w-full  md:h-screen text-blue-300 bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl text-bold inline border-b-4 rounded-md border-[#eb3737]">
            Work
          </p>
          <p className="py-6 ">
            // Here some of my works, If you would like to see more , visit my <a href="https://github.com/Khash90" target="_blank" className="hover:cursor-pointer"><strong className="underline">Github</strong></a> please.{" "}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 hover:cursor-pointer">

          {/* card */}

          {/* Project1 */}
          <div
            style={{ backgroundImage: `url(${Fullstack})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-80 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                FullStack React Library
              </span>
              <div className="pt-8 text-center">
                <a href="https://wandering-test-production.up.railway.app/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500 ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Khash90/TechDegree-FSJS-Project-10" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          {/* Project2 */}
          <div
            style={{ backgroundImage: `url(${SqlLibrary})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-80 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                SQL Library Manager
              </span>
              <div className="pt-8 text-center">
                <a href="https://techdegree-fsjs-project-8-production.up.railway.app/books" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Khash90/TechDegree-FSJS-Project-8" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project3 */}
          <div
            style={{ backgroundImage: `url(${WordHunter})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-80 duration-500 ease-in-out">
              <span className="text-2xl font-bold text-white tracking-wider">
                OOP Phrase Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://khash90.github.io/TechDegree-FSJS-Project-04/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Khash90/TechDegree-FSJS-Project-04.git" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

         {/* Project4 */}
          <div
            style={{ backgroundImage: `url(${DataPag})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-80 duration-500 ease-in-out">
              <span className="text-2xl font-bold text-white tracking-wider">
               Data Filtering
              </span>
              <div className="pt-8 text-center">
                <a href="https://khash90.github.io/TechDegree-FSJS-Project-02/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Khash90/TechDegree-FSJS-Project-02.git" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project5 */}
          <div
            style={{ backgroundImage: `url(${FormRes})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-80 duration-500 ease-in-out">
              <span className="text-2xl font-bold text-white tracking-wider hover:bg-blue-950 hover:text-white ">
                Interactive Form
              </span>
              <div className="pt-8 text-center">
                <a href="https://khash90.github.io/TechDegree-FSJS-Project-03/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Khash90/TechDegree-FSJS-Project-03.git" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project6 */}
          <div
            style={{ backgroundImage: `url(${Gallery})` }}
            className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-80 duration-500 ease-in-out">
              <span className="text-2xl font-bold text-white tracking-wider">
                Interactive Gallery
              </span>
              <div className="pt-8 text-center">
                <a href="https://khash90.github.io/TechDegree-Project-05/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500" >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Khash90/TechDegree-Project-05" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg hover:bg-blue-950 hover:text-white duration-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

 

        </div>
      </div>
    </div>
  );
};

export default Work;
