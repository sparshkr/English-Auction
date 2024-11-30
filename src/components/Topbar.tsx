"use client";
export default function Topbar() {
  return (
    <div className="w-[100%] flex flex-row justify-between items-center pt-2 px-2 text-lg">
      <button className="bg-[#dddde0] rounded-lg px-2 top-2 bg-opacity-50 text-white font-bold">
        5999
      </button>

      <button className="bg-[#dddde0] w-10 h-10 flex flex-col justify-evenly items-center rounded-lg top-2 bg-opacity-50">
        <span className="block w-6 border-t-2 border border-white"></span>
        <span className="block w-6 border-t-2 border border-white"></span>
        <span className="block w-6 border-t-2 border border-white"></span>
      </button>
    </div>
  );
}
