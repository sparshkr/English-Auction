"use client";
import React from "react";

export default function InputComponent() {
  return (
    <div className="relative w-full max-w-[379px] h-[72px]">
      <input
        type="text"
        placeholder="Enter Your Bid"
        className="w-full h-full border-t-0 border-b-0 rounded-t-[30px] rounded-b-[60px] p-2 bg-transparent text-center text-white placeholder-white focus:outline-none relative z-10"
      />
      <div className="absolute inset-0 rounded-t-[30px] rounded-b-[60px] bg-gradient-to-r from-blue-500 via-transparent to-pink-500 -z-10 p-[2px]">
        <div className="w-full h-full bg-[#0C0D29] rounded-t-[28px] rounded-b-[58px]"></div>
      </div>
      <button
        className="absolute right-4 top-[40%] transform -translate-y-1/2 text-4xl text-white z-50"
        onClick={() => {
          console.log("clicked");
        }}
      >
        &rarr;
      </button>
    </div>
  );
}
