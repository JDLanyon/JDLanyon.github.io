
export const getRandomImage = (imageList: string[]): string => {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
};

// List of available images (relative to public folder)
export const available_images: string[] = [
  '/photography/lights.jpg',
  '/photography/Moon.jpeg',
  '/photography/moon2.jpeg',
  '/photography/moon3.jpg',
  '/photography/seat.jpg',
];