"use client"

import "@/app/globals.css";
import { ColouredIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative mx-auto my-8 flex-col flex md:flex-row items-center">
      <ColouredIcon name="flat_lotus" className="mx-auto" />
    </footer>
  )
}
