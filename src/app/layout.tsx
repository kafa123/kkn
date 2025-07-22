// app/layout.tsx
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KedungJati',
  description: 'Explore KedungJati tourism site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
