"use client"

import "@/app/globals.css";
import Image from "next/image";
import ColouredIcon from "./coloured_icon";

export default function Footer() {
  return (
    <footer className="relative mx-auto my-8 flex-col flex md:flex-row items-center">
      <ColouredIcon name="flat_lotus" className="mx-auto" />
    </footer>
  )
}
