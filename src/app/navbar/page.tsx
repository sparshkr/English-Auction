"use client";
import React, { useRef } from "react";

export default function Navbar() {
  const dialogRef = useRef<HTMLDialogElement | null>(null); // Reference to the dialog element

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="h-screen w-screen flex items-end justify-center">
      <div className="w-[80%] border-4 h-24 mb-8 shadow-lg rounded-full border-black flex justify-around items-center gap-20">
        <button className="border-2 rounded-3xl p-2 shadow-lg bg-blue-600 hover:bg-blue-700 hover:text-white">
          Bids
        </button>

        {/* My Bids button */}
        <button
          className="border-2 rounded-3xl p-2 shadow-lg bg-blue-600 hover:bg-blue-700 hover:text-white"
          onClick={openDialog} // Open dialog
        >
          My Bids
        </button>

        {/* Dialog */}
        <dialog
          ref={dialogRef}
          className="rounded-lg p-6 bg-white shadow-lg w-[80%] max-w-lg"
        >
          <h2 className="text-lg font-semibold">My Bids</h2>
          <p className="mt-2 text-gray-600">
            Here are the details of your bids.
          </p>
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closeDialog} // Close dialog
            >
              Close
            </button>
          </div>
        </dialog>

        <button className="border-2 rounded-3xl p-2 shadow-lg bg-blue-600 hover:bg-blue-700 hover:text-white">
          Redeem
        </button>
        <button className="border-2 rounded-3xl p-2 shadow-lg bg-blue-600 hover:bg-blue-700 hover:text-white">
          How to
        </button>
      </div>
    </div>
  );
}
