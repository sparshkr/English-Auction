import AppComponentPhone from "@/components/AppComponentPhone";
import AppContent1 from "@/components/AppContent1";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="md:hidden">
        <AppComponentPhone />
      </div>

      <div className="hidden md:block">
        <AppContent1 />
      </div>
    </div>
    // <Image src={Bgimg} alt="Bgimg" />
    // <AppComponentPhone />
  );
}
