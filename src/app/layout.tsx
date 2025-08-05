// app/layout.tsx
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { Merriweather, Source_Sans_3 } from 'next/font/google'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], // atur sesuai kebutuhan
  variable: '--font-merriweather',
})

const source_Sans_3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-source-sans-3'
});

export const metadata: Metadata = {
  title: 'KedungJati',
  description: 'Explore KedungJati tourism site',
  icons: "logo-bantul.svg"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${source_Sans_3.variable} ${merriweather.variable} `}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
