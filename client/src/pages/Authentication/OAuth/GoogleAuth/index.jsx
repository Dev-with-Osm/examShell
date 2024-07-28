import React, { useState } from "react";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../../firebase";

export default function GoogleAuth() {
  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    const userName = result.user.displayName;
    const phoneNumber = result.user.phoneNumber;
    const userAvatar = result.user.photoURL;
    const data = result.user;
    console.log({ userName, phoneNumber, userAvatar, data });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center justify-center gap-2 px-5 py-2 rounded-md border  bg-white/80 text-black/80 font-semibold hover:text-white/80 hover:bg-white/20 transition-all duration-300"
      >
        Sign up with <GoogleIcon />
      </button>
    </>
  );
}
