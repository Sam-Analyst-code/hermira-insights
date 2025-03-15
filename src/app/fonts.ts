import { Space_Grotesk } from 'next/font/google';

// Configure Space Grotesk - modern, geometric sans-serif with distinctive character
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
}); 