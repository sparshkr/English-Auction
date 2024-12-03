"use client";
import React from "react";
import Image from "next/image";
import CircularProgressBar from "./CircularProgressBar";

interface CardProps {
  AuctionName: string;
  progress: number;
}

const Card: React.FC<CardProps> = ({ AuctionName, progress }) => {
  return (
    <div className="relative w-[260px] h-[260px] ">
      {/* Thinner Gradient ring */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-pink-500 rounded-[105px] p-[3px] shadow-[0px_0px_30px_100px_rgba(255,165,0,0.1)] ">
        <div className="h-full w-full bg-white rounded-[100px] overflow-hidden flex flex-col">
          {/* Centered Auction Name */}
          <div className="absolute inset-0 -top-4 flex justify-center text-center text-white font-bold z-10">
            <div className="relative self-start bg-[#dddde0] bg-opacity-50 px-2 rounded-lg top-2">
              {AuctionName} | 1X
            </div>
          </div>

          {/* Image */}
          <Image
            src="/images/AirpodPro.png"
            alt="Product Img"
            width={260}
            height={260}
            className="object-cover w-full h-full"
          />

          {/* CircularProgressBar - positioned at bottom center, flowing out */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 w-24 h-24 flex items-center justify-center">
            <div className="bg-white rounded-full p-1 shadow-lg shadow-purple-500/20">
              <CircularProgressBar progress={progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
