import React from "react";
import Logo1337 from "../../assets/logos/1337Logo";

export default function NavBar() {
  return (
    <div className="md:max-w-7xl px-4 mx-auto">
      <div className="pt-4 w-fit flex flex-col">
        <h1 className="text-3xl font-semibold">ExamShell</h1>
        <span className="self-end">
          <Logo1337 />
        </span>
      </div>
    </div>
  );
}
