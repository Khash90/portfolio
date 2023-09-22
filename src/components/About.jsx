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
              Welcome to my portfolio! As a highly motivated Computer Software
              Engineering graduate,
            </p>
          </div>
          <div>
            <p>
              I've spent years honing my skills in both <strong>Front-End and Back-End development</strong> . I'm passionate about creating engaging, user-centric web applications and I take pride in code that is clean,readable and
              efficient. Here, you'll find a curated selection of my
              most  impressive projects, each showcasing different
              skills and technologies like JavaScript, React.js, Node.js, and
              more. Feel free to explore, and don't hesitate to reach out if you
              have any questions or if you're interested in collaborating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
