import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-[15vh] bg-green-900 text-white flex justify-center items-center text-3xl">
      <ul className="flex gap-x-8">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={'/pages/about'}>
          <li>About</li>
        </Link>
        <Link href={"/pages/contacts"}>
          <li>Contacts</li>
        </Link>
      </ul>
    </div>
  );
}
