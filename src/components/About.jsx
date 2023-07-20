import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-blue-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-bold inline border-b-4 rounded-md border-[#eb3737] ">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-2xl font-bold ">
              <p>
                Hi I'm Khashayar nice to meet you , please take a look around .
              </p>
            </div>
            <div>
              <p>Motivated Computer Software Engineer graduate with a comprehensive background in <strong>Front-End and Back-End</strong> development.
              Looking to leverage my robust technical skills, adaptability, and passion for software development in a Junior Developer role .
              Committed to lifelong learning and continued professional growth in the field.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
