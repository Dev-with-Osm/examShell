import React from "react";
import HomeBackground from "./components/homeBackground/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import GithubLogo from "../../assets/icons/GithubLogo";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "../Authentication/OAuth/GoogleAuth";
import GithubAuth from "../Authentication/OAuth/GithubAuth";

export default function HomePage() {
  const [text] = useTypewriter({
    words: ["examShell!"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 150,
    delaySpeed: 50,
  });

  const navigate = useNavigate();

  return (
    <>
      <HomeBackground />
      <div className="relative h-[80vh] flex -mt-20 justify-center flex-col items-center max-w-4xl text-center mx-auto px-3 gap-10">
        <div>
          <h1 className="text-white font-semibold text-3xl md:text-[40px] md:leading-normal ">
            your guide to the 42 Network pool. Succeed with tips and tools from{" "}
            <br className="sm:hidden" />
            <span className="">{text}</span>
            <span className="text-3xl">
              <Cursor cursorStyle={"~$"} cursorColor="#4AAD52" />
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div>
            <GoogleAuth />
          </div>
          <div>
            <GithubAuth />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 text-center w-full p-2 text-sm bg-gradient-to-r from-[#e2d6dc] via-[#a563c8] to-[#8a50a9] inline-block text-transparent bg-clip-text">
        <span className="bg-gradient-to-r from-[#e2d6dc] via-[#a563c8]  to-[#9b70b2] inline-block text-transparent bg-clip-text">
          Developed By Osm
        </span>
      </div>
    </>
  );
}
