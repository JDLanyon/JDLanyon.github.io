'use client';

import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function close() {
    router.back();
  }

  return (
    <div className="modal-backdrop">
        {children}
        <button onClick={close} className="h-48 w-48 cursor-pointer" />
    </div>
  );
}
