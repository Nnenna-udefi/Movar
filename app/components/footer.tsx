import Link from "next/link";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="text-center border border-t-4 border-x-0 py-6 text-xl border-gray-400 bg-black">
      <footer>
        <p>Movar. Copyright (c) 2024 Nnenna Udefi</p>
        <div className="flex gap-4 items-center justify-center mt-6">
          <Link href="https://www.linkedin.in/nnennaudefi">
            <AiOutlineLinkedin />
          </Link>
          <Link href="https://www.github.com/Nnenna-udefi">
            {" "}
            <AiOutlineGithub />
          </Link>
          <Link href="https://www.twitter.com/nnennaudefi">
            <AiOutlineTwitter />
          </Link>
        </div>
      </footer>
    </div>
  );
};
