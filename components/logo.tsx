import Link from "next/link";
import React from "react";
import { K2D } from "next/font/google";

const k2d = K2D({
  subsets: ["latin"],
  weight: ["800"],
});

const Logo = () => {
  return (
    <Link href={"/"} className="font-bold text-3xl" style={k2d.style}>
      F.O
    </Link>
  );
};

export default Logo;
