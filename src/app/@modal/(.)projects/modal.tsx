'use client';

import { useRouter } from 'next/navigation';

import "@/app/globals.css";
import Button from '@/app/components/button';


// document.documentElement.style.overflow = "hidden" // prevent bg scrolling

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function close() {
    router.back();
  }

  return (
    <div>
      {/* empty div for closing the modal */}
      <div onClick={close} className="fixed w-full h-full z-10 m-0">
      </div>
      {/* modal */}
      <div className="fixed inset-0 flex m-0 md:m-16 transition-all z-100 bg-[var(--background)]/80 border-solid border-[var(--primary)] border-1">

          <div className="absolute top-4 right-4 transform z-101">
            <Button onClick={close} text="x" />
          </div>

        <div className="flex-auto overflow-y-auto relative p-12 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:none [&::-webkit-scrollbar-thumb]:bg-[var(--primary)]">
          {children}
        </div>

    </div>
    </div>
  );
}
