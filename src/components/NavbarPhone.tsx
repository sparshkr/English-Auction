"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

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

export default function NavbarPhone() {
  const [activeItem, setActiveItem] = useState("Bid");
  const [activePosition, setActivePosition] = useState(0);
  const [activeWidth, setActiveWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      const navElement = navRef.current;
      if (navElement) {
        const activeElement = navElement.querySelector(
          `[data-name="${activeItem}"]`
        ) as HTMLElement;
        if (activeElement) {
          const navRect = navElement.getBoundingClientRect();
          const activeRect = activeElement.getBoundingClientRect();
          const textElement = activeElement.querySelector(
            ".text-ms"
          ) as HTMLElement;
          if (textElement) {
            const textWidth = textElement.offsetWidth;
            setActivePosition(
              activeRect.left -
                navRect.left +
                (activeRect.width - textWidth) / 2
            );
            setActiveWidth(textWidth);
          }
        }
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, [activeItem]);

  const handleMenuClick = (itemName: string) => {
    if (itemName === "How to" || itemName === "Redeem") {
      setModalContent(itemName); // Set the content for the modal
      setIsModalOpen(true); // Open the modal
    } else {
      setIsModalOpen(false); // Close the modal when clicking on other items
    }
    setActiveItem(itemName); // Update the active item
  };

  return (
    <div className="fixed bottom-2 z-50 w-full max-w-[512px] px-2">
      <div className="relative">
        {isModalOpen && (
          <div
            className="absolute bottom-full w-full mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#1a1a3a] rounded-3xl p-6 w-full modal-slide-up overflow-hidden">
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
                        height="315"
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
          className="relative flex h-20 items-center justify-around rounded-full border-2 border-white bg-white/10 backdrop-blur-sm"
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
                className="transition-transform group-hover:scale-110"
              />
              <span className="text-ms mt-1">{item.name}</span>
            </button>
          ))}
          <span
            className="absolute h-1 rounded-full bg-white transition-all duration-300 ease-in-out"
            style={{
              left: `${activePosition - 5}px`,
              width: `${activeWidth + 10}px`,
              bottom: "0.5rem",
            }}
          />
        </nav>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[-1] bg-black/50"
          onClick={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
