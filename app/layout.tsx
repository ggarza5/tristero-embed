import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PermissionsPolicy from './components/PermissionsPolicy';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tristero Widget Demo',
  description:
    "Experience seamless cross-chain swaps with Mach.Exchange's embedded widget. Deploy your own in minutes!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PermissionsPolicy />
        {children}
      </body>
    </html>
  );
}
