import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customAlmond: '#CCC5B9',
        customOlive: '#403D39',
        customBlack: '#0f111',
        primaryText: '#0F1111',
        lightText: '#565959',
        flame: '#FEBD69',
        floral: '#FFFCF2',
        lightGray: '#F7F7F7',
      },
    },
  },
  plugins: [],
};
export default config;
