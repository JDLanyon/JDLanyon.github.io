'use client';

import { useRouter } from 'next/navigation';

import Button from '@/app/components/button';


export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function close() {
    router.back();
  }

  return (
    <div className="fixed inset-0 flex m-0 md:m-16 transition-all z-100 p-8 bg-black/50 border-solid border-white border-1">
        {children}
        <div className="absolute top-2 right-2 transform z-101">
          <Button onclick={close} text="x" />

        </div>
    </div>
  );
}
