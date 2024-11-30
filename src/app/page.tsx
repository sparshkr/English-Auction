"use client";

import { useState, useEffect } from "react";
import Card from "../components/Card";
import Image from "next/image";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);
  const [bids, setBids] = useState<string[]>([]);

  const AuctionName = "English Auction";
  const ProductName: string = "Nike Jordans";
  const ProductPrice: string = "1000.00";

  useEffect(() => {
    const newAvatarUrls = Array.from(
      { length: 28 },
      (_, i) => `https://api.auctionx.dev/assets/avatar/${i + 1}.png`
    );
    setAvatarUrls(newAvatarUrls);

    const newBids = Array.from({ length: 50 }, (_, i) =>
      String(10000 + i * 100)
    );
    newBids.sort((a, b) => Number(b) - Number(a));
    setBids(newBids);
  }, []);

  return (
    <div className="grid justify-center grid-cols-1 sm:grid-cols-[1fr_512px_1fr] bg-gradient-to-b from-[#4A038B] to-[#0C0D29] overflow-hidden min-h-screen">
      <div className="relative col-start-2 col-span-1 mb-2 overflow-hidden px-4 sm:px-0 flex flex-col items-center">
        <div className="absolute inset-0 bg-[url('https://s3-alpha-sig.figma.com/img/15cf/9786/f0907812fe039af16567486eae32c8c3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bR~ZDVQKHtjcj2Ly7Rr1f0islF-1-rOrOADiV6xQ3zXDocPj9lYnQkX0UQK6XYxJUGdS5y6wOgMW5h3RjspZ-t~g72K0xw-LAUvQiIl0lIa~Orx4zYUgZvmwNFuZ8S9hJxFXY6iymb5QqcpsdyN6Bk2PqnzJPR2t-chGGAsBAEYlIJbwGfU6TF6rCxyNtRzFA7wCVH~LOHFJFjsVtTfsIvmuTyNUiotk30KIvMo7rrhNBuBc~-x2XSlwE0DfFRuE0WMUUw8rPK0thzuCmtr18cFxXW8rAqoT0kjWf97lQIp3LEG~ePFSQdZKezn4qae~gVr48BGswZngP~2gW8gX7g__')] bg-cover bg-center opacity-30 z-0"></div>
        <div className="relative z-50 my-0 mb-6 sm:mb-10 w-full">
          <Topbar />
        </div>

        <div className="relative z-90 text-white text-xl sm:text-2xl lg:px-8 mb-4 flex justify-between items-center px-2 w-full">
          <span>{ProductName}</span>
          <span className="font-bold text-2xl mx-2 absolute left-[50%]">|</span>
          <span>${ProductPrice}</span>
        </div>

        <div className="relative z-10 w-full text-white flex justify-center items-center flex-wrap gap-4 sm:gap-5 flex-col pt-4 mb-2">
          <div className="flex flex-col sm:flex-row justify-center items-center transition-all duration-300 w-full relative gap-6">
            <div
              className={`transition-all duration-300 relative z-20 flex flex-shrink`}
            >
              <Card AuctionName={AuctionName} progress={70} />
            </div>

            {/* Updated Bid List with Tailwind Thin Scrollbar */}
            {/* Updated Bid List with Thinner Design */}
            <div
              className={`relative sm:relative right-0 top-0 sm:top-auto mt-4 sm:mt-0 max-h-[300px] overflow-x-auto transition-all duration-500 bg-[#0C0D29]/10 backdrop-blur-sm p-2 rounded-lg z-10 opacity-100 w-full lg:w-[100px] flex flex-row flex-wrap  gap-1 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent justify-center items-center`}
            >
              {bids.map((bid, index) => (
                <div
                  key={index}
                  className={`py-0.5 px-2 text-center text-sm ${
                    index === 0 ? "text-green-500 font-bold" : ""
                  } bg-[#1A1B3D] rounded-md`}
                >
                  ${bid}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative flex justify-between w-full sm:w-[80%] transition-all duration-300 z-30`}
          >
            <div className="flex flex-col">
              <div>EMD Paid</div>
              <div className="text-center">$200</div>
            </div>

            <div className="flex flex-col">
              <div>Reserved Price</div>
              <div className="text-center">NA</div>
            </div>
          </div>

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
              className="absolute right-4 top-[40%] transform -translate-y-1/2 text-4xl z-20"
              onClick={() => {
                console.log("clicked");
              }}
            >
              &rarr;
            </button>
          </div>

          <section className="mt-2 flex flex-col gap-2 mb-10 w-full">
            <h2 className="text-lg">Bidders</h2>
            <div className="flex gap-1 flex-wrap mb-auto justify-center">
              {avatarUrls.map((url, index) => (
                <Image
                  key={index}
                  className="inline-block size-8 rounded-full ring-2 ring-transparent"
                  src={url}
                  alt={`Avatar ${index + 1}`}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="h-[80px]"></div>
        <Navbar />
      </div>
    </div>
  );
}
