"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const menuItems = [
  {
    name: "Bid",
    imgSrc:
      "https://gvauction.auctionx.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbid-thunder.c1314fdb.png&w=64&q=75",
  },
  {
    name: "MyBids",
    imgSrc:
      "https://gvauction.auctionx.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-bids.77a8aebf.png&w=64&q=75",
  },
  {
    name: "Redeem",
    imgSrc:
      "https://gvauction.auctionx.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbidder.59d43e33.png&w=64&q=75",
  },
  {
    name: "How to",
    imgSrc:
      "https://gvauction.auctionx.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhowto.c2aa9712.png&w=64&q=75",
  },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Bid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (itemName: string) => {
    if (itemName === "How to" || itemName === "Redeem") {
      setModalContent(itemName);
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
    setActiveItem(itemName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveItem("Bid");
  };

  return (
    <div className="sticky -bottom-5 w-full z-50 h-[80px]">
      {isModalOpen && (
        <div
          className="absolute bg-black/50 z-40 rounded-[2rem]"
          onClick={closeModal}
          aria-hidden="true"
          style={{
            top: "calc(-100vh + 10px)",
            height: "calc(130vh - 100px)",
            width: "120%",
            left: "-10px",
          }}
        />
      )}
      <div className="max-w-[272px] mx-auto px-2 pb-0">
        {isModalOpen && (
          <div
            className="absolute bottom-full w-full mb-2 z-50 right-[1px]"
            style={{ maxHeight: "calc(150vh - 100px)" }}
          >
            <div
              className="bg-[#1a1a3a] rounded-3xl p-6 w-full modal-slide-up overflow-hidden relative"
              style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <h2 className="text-center text-4xl font-bold text-white modal-fade-in">
                {modalContent === "Redeem"
                  ? "Redeem Your Points"
                  : "How to Use This Feature"}
              </h2>
              <div className="text-center text-white mt-4">
                {modalContent === "Redeem" ? (
                  <p>
                    Here you can redeem your accumulated points for exclusive
                    rewards.
                  </p>
                ) : (
                  <>
                    <p>
                      Watch the following video to learn how to use the
                      platform:
                    </p>
                    <div className="flex justify-center mt-4">
                      <iframe
                        width="100%"
                        height="180"
                        src="https://www.youtube.com/embed/uG8eWGQFwTI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="max-w-[560px] max-h-[315px]"
                      ></iframe>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <nav
          ref={navRef}
          className="flex h-15 items-center justify-around rounded-full border-2 border-white bg-white/10 backdrop-blur-sm"
        >
          {menuItems.map((item) => (
            <button
              key={item.name}
              data-name={item.name}
              onClick={() => handleMenuClick(item.name)}
              className={`group flex flex-col items-center justify-between pb-3 ${
                activeItem === item.name ? "text-white" : "text-gray-300"
              }`}
            >
              <Image
                src={item.imgSrc}
                alt={`${item.name} icon`}
                width={30}
                height={30}
                className="transition-transform group-hover:scale-110 w-5 h-5"
              />
              <span className="text-[10px] mt-1">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
