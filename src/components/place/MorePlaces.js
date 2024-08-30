"use client";

import { useState } from "react";
import LinksPlaces from "./LinksPlaces";

export default function MorePlaces({ places, actualPlace }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ translate: open ? "0 0" : "0 60%" }}
      className="fixed w-full bottom-0 py-4 overflow-auto bg-slate-900 transition-all"
    >
      <button onClick={() => setOpen(!open)}>
        {open ? "Ver menos" : "Ver mas destinos"}
      </button>
      <LinksPlaces places={places} actualPlace={actualPlace} />
    </div>
  );
}
