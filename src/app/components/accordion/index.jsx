"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import "./accordion.css";
import { useEffect, useState } from "react";

const Accordion = ({ title, text }) => {
  const [open, setOpen] = useState("false");

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="wrapper_accordion">
      <div className="title_accordion" onClick={handleClick}>
        <h2>{title}</h2>
        <ChevronRight
          width={45}
          height={45}
          className={open ? "chevron" : "chevron_down"}
        />
      </div>
      <div className={open ? "text_accordion none" : "text_accordion"}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Accordion;
