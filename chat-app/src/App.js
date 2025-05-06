import React, { useState, useEffect } from "react";
import "./App.css";
import { evaluate } from "mathjs";

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "C",
  "+",
  "=",
];

export default function App() {
  const [input, setInput] = useState("");

  const calculateResult = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      calculateResult();
    } else {
      setInput((prev) => prev + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if ("0123456789+-*/.".includes(key)) {
        setInput((prev) => prev + key);
      } else if (key === "Enter") {
        event.preventDefault(); // prevent form submission if inside a form
        calculateResult();
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key.toLowerCase() === "c") {
        setInput("");
      } else if (key === "Escape") {
        setInput("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  return (
    <div className="box">
      <div>
        <div className="inputField" disabled>
          {input}
        </div>
      </div>
      <div className="btns">
        {buttons.map((item, i) => (
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleClick(item)}
            key={i}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
