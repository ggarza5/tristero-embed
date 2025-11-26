import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tristero Widget Demo',
  description:
    "Experience seamless cross-chain swaps with Mach.Exchange's embedded widget. Deploy your own in minutes!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const widgetUrl = process.env.NEXT_PUBLIC_WIDGET_URL || 'https://app.mach.exchange/embed?chains=1,10,143,56,43114&showBranding=true&hideAIInput=true&logoUrl=https://upload.wikimedia.org/wikipedia/commons/3/3d/Injective_l.png';
  const iframeOrigin = new URL(widgetUrl).origin;

  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="permissions-policy"
          content={`publickey-credentials-create=(self '${iframeOrigin}'), publickey-credentials-get=(self '${iframeOrigin}')`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
