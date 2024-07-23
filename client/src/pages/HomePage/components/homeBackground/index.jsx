import React from "react";

export default function HomeBackground() {
  return (
    <div className="absolute-bg overflow-hidden">
      <div className="absolute-bg inset-0 justify-center">
        <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
      </div>
    </div>
  );
}
