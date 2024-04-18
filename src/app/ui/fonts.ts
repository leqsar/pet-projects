import { Rubik, Bellefair, Barlow, Barlow_Condensed } from 'next/font/google';
 
export const rubik = Rubik({ 
  weight: ['300', '400', '500'],
  subsets: ['latin'], 
});

export const bellefair = Bellefair({ 
  weight: ['400'],
  subsets: ['latin'], 
});

export const barlow = Barlow({ 
  weight: ['200', '300', '400', '500', '600'],
  subsets: ['latin'], 
});

export const barlowCondensed = Barlow_Condensed({ 
  weight: ['200', '300', '400', '500', '600'],
  subsets: ['latin'], 
});

