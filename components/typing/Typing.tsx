"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typing() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A simple and effective approach to achieving excellence.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <span
      ref={el}
      style={{ fontSize: "24px", fontWeight: "bold" }}
    />
  );
}