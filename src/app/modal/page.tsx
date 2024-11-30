import React from "react";

export default function Modal() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      <div className="relative h-[50%] w-[50%] flex flex-col justify-between border-2 rounded-lg shadow-lg md:h-[80%] sm:h-[100%]">
        <div className="w-full flex justify-end my-3 bg-slate-400 rounded-t-lg mt-[0em]">
          <button className="px-2 hover:bg-slate-950 hover:text-emerald-50 rounded-t-lg">
            X
          </button>
        </div>
        <div className="w-full flex flex-col flex-wrap justify-start gap-6 items-center flex-grow">
          <header className="font-bold text-2xl shadow-lg px-2">
            This a Modal
          </header>
          <section className="text-start mx-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            veniam ad distinctio unde suscipit itaque officia molestias ratione
            perspiciatis asperiores animi aliquid provident laudantium quaerat
            dolor praesentium necessitatibus tenetur omnis, alias laborum
            molestiae velit ipsam eos? Illo ex quod iure similique consectetur
            deserunt rem voluptas exercitationem sequi libero, laborum sed?
          </section>
        </div>
        <footer className="w-full text-center mt-auto">
          <button className="bg-blue-600 hover:bg-blue-700 rounded-lg p-2 hover:text-emerald-50 mb-2 shadow-lg">
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
