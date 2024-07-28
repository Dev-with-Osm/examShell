import React from "react";
import GithubLogo from "../../../../assets/icons/GithubLogo";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../../firebase";

export default function GithubAuth() {
  const handleclick = async () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    console.log(result.user?.reloadUserInfo.providerUserInfo);
  };
  return (
    <button
      className="flex items-center justify-center gap-2 px-5 py-2 rounded-md border  bg-white/20 text-white/80 font-semibold hover:text-black/80 hover:bg-white/80 transition-all duration-300"
      onClick={handleclick}
    >
      Sign up with <GithubLogo />
    </button>
  );
}
