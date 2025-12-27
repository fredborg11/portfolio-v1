import React from "react";
import { CoffeeIcon } from "./CoffeeIcon";

export default function CoffeeCorner() {
  return (
    <a
      href="mailto:fredborg11@gmail.com"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 bg-offWhiteCV hover:bg-blackCV text-blackCV hover:text-offWhiteCV px-4 py-2 shadow-md border border-blackCV hover:shadow-xl transition-all"
    >
      {/* Ikon — animerer ved hover */}
      <CoffeeIcon size={28} />

      <span className="text-xs font-bold">
        Lad os tage en kop?
      </span>
    </a>
  );
}
