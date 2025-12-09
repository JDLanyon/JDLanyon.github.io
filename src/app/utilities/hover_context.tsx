'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface HoverContextType {
  blurBackground: boolean;
  setBlurBackground: (visible: boolean) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export function HoverProvider({ children }: { children: ReactNode }) {
  const [blurBackground, setBlurBackground] = useState(true);

  return (
    <HoverContext.Provider value={{ blurBackground, setBlurBackground }}>
      {children}
    </HoverContext.Provider>
  );
}

export function useHover() {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error('useHover must be used within HoverProvider');
  }
  return context;
}