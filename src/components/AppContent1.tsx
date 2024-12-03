"use client";
import React, { useState, useEffect } from "react";
import Topbar from "@/components/Topbar";
import Card from "@/components/Card";
import InputComponent from "@/components/InputComponent";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AppContent1() {
  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);
  const AuctionName = "English Auction";
  const ProductName: string = "AirPods Pro";
  const ProductPrice: string = "1000.00";

  useEffect(() => {
    const newAvatarUrls = Array.from(
      { length: 28 },
      (_, i) => `https://api.auctionx.dev/assets/avatar/${i + 1}.png`
    );
    setAvatarUrls(newAvatarUrls);
  }, []);

  return (
    <div className="mt-1 relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[550px] w-[300px]">
      <div className="h-8 w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-12 w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-12 w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-16 w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

      {/* Scrollable Container */}
      <div className="relative rounded-[2rem] w-[272px] h-[522px] overflow-x-hidden overflow-y-auto bg-gradient-to-b from-[#4A038B] to-[#0C0D29]">
        <div className="absolute inset-0">
          <div
            className="relative w-full h-full bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/15cf/9786/f0907812fe039af16567486eae32c8c3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bR~ZDVQKHtjcj2Ly7Rr1f0islF-1-rOrOADiV6xQ3zXDocPj9lYnQkX0UQK6XYxJUGdS5y6wOgMW5h3RjspZ-t~g72K0xw-LAUvQiIl0lIa~Orx4zYUgZvmwNFuZ8S9hJxFXY6iymb5QqcpsdyN6Bk2PqnzJPR2t-chGGAsBAEYlIJbwGfU6TF6rCxyNtRzFA7wCVH~LOHFJFjsVtTfsIvmuTyNUiotk30KIvMo7rrhNBuBc~-x2XSlwE0DfFRuE0WMUUw8rPK0thzuCmtr18cFxXW8rAqoT0kjWf97lQIp3LEG~ePFSQdZKezn4qae~gVr48BGswZngP~2gW8gX7g__')",
            }}
          ></div>
        </div>

        <div className=" relative z-10 flex flex-col justify-center items-center px-2 pb-3">
          <Topbar />
          <div className="relative text-white text-md font-bold px-4 mb-4 flex justify-between items-center py-4 w-full">
            <span>{ProductName}</span>
            <span className="font-bold text-2xl mx-2 absolute left-[48%]">
              |
            </span>
            <span>${ProductPrice}</span>
          </div>
          <div>
            <Card AuctionName={AuctionName} progress={70} />
          </div>
          <div
            className={`relative flex justify-between w-full sm:w-[100%] transition-all duration-300 text-white`}
          >
            <div className="flex flex-col text-sm">
              <div>EMD Paid</div>
              <div className="text-center">$200</div>
            </div>
            <div className="flex flex-col text-sm">
              <div>Reserved Price</div>
              <div className="text-center">NA</div>
            </div>
          </div>
          <div className="w-full mt-1">
            <InputComponent />
          </div>
          <section className="mt-2 flex flex-col gap-2 mb-2 w-full">
            <h2 className="text-sm text-white">Bidders</h2>
            <div className="flex gap-1 flex-wrap mb-auto justify-start text-sm ">
              {avatarUrls.map((url, index) => (
                <Image
                  key={index}
                  className="inline-block rounded-full  w-[30px] h-[30px]"
                  src={url}
                  alt={`Avatar ${index + 1}`}
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </section>
          {/* <div className="relative inset-0 w-full -left-2 "> */}
          <Navbar />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
