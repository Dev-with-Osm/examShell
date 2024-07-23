import React from "react";
import HomeBackground from "./components/homeBackground/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import GithubLogo from "../../assets/icons/GithubLogo";

export default function HomePage() {
  const [text] = useTypewriter({
    words: ["examShell!"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 150,
    delaySpeed: 50,
  });

  return (
    <>
      <HomeBackground />
      <div className="relative h-[80vh] flex -mt-20 justify-center flex-col items-center max-w-4xl text-center mx-auto px-3 gap-10">
        <div>
          <h1 className="text-white font-semibold text-3xl md:text-[40px] md:leading-normal ">
            your guide to the 42 Network pool. Succeed with tips and tools from{" "}
            <br className="md:hidden" />
            <span className="">{text}</span>
            <span className="text-3xl">
              <Cursor cursorStyle={"~$"} cursorColor="#4AAD52" />
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div>
            <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-md border  bg-white/80 text-black/80 font-semibold">
              Sign up with <GoogleIcon />
            </button>
          </div>
          <div>
            <button
              className="flex items-center justify-center gap-2 px-5 py-2 rounded-md border  bg-white/20 text-white/80 font-medium"
              onClick={() => console.log("helkl")}
            >
              Sign up with <GithubLogo />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 text-center w-full p-2 text-sm">
        Developed By Osm
      </div>
    </>
  );
}
