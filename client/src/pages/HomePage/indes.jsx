import React from "react";
import HomeBackground from "./components/homeBackground/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HomePage() {
  const [text] = useTypewriter({
    words: ["ExamShell!"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 150,
    delaySpeed: 50,
  });

  return (
    <>
      <HomeBackground />
      <div className=" h-[80vh] flex -mt-20 justify-center flex-col items-center max-w-4xl text-center mx-auto px-3">
        <h1 className="text-white font-semibold text-3xl md:text-[40px] md:leading-normal ">
          your guide to mastering the 42 Network pool. Find tips, tools, and
          insights to help you succeed. Unlock your potential with{" "}
          <span className="">{text}</span>
          <Cursor cursorStyle={"~$"} cursorColor="#4AAD52" />
        </h1>
        <div>sign up</div>
      </div>
    </>
  );
}
