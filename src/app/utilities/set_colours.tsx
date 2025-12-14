'use client';

import { extractColors } from 'extract-colors';


// inverts the hex
const invertHexColor = (hex: string) => `#${(0xFFFFFF ^ parseInt(hex.slice(1), 16)).toString(16).padStart(6, '0')}`;

// set css variables
export const setColours = (colors: Array<{ hex: string }>) => {
  const root = document.documentElement;
  
  if (colors[0]) {
    root.style.setProperty('--primary', colors[0].hex);
    root.style.setProperty('--primary_inverse', invertHexColor(colors[0].hex));
  }
  
  if (colors[1]) {
    root.style.setProperty('--secondary', colors[1].hex);
    root.style.setProperty('--secondary_inverse', invertHexColor(colors[1].hex));
  }
  
  if (colors[2]) {
    root.style.setProperty('--background', colors[2].hex);
    root.style.setProperty('--background_inverse', invertHexColor(colors[2].hex));
  }
};

  // Extract colors from image
export const extractColoursFromImage = async (image: string) => {
  try {
    const colors = await extractColors(image, {
      crossOrigin: 'anonymous', // Important for CORS
      pixels: 4000, // limit pixels for performance
      distance: 0.2,
      saturationDistance: 0.2,
      lightnessDistance: 0.2,
    });
    
    setColours(colors);
  } catch (error) {
    console.error('Error extracting colors:', error);
    // Set fallback colors
    const root = document.documentElement;
    root.style.setProperty('--primary', '#eee');
    root.style.setProperty('--secondary', '#ccc');
    root.style.setProperty('--background', '#111');
  }
};