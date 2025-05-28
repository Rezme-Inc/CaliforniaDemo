import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fair Chance Hiring Compliance Portal',
  description: 'A comprehensive portal for Fair Chance Hiringcompliance across multiple jurisdictions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header with logo */}
        <header className="w-full bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
            <a href="https://www.rezme.app/" className="text-3xl font-bold select-none flex items-center" target="_blank" rel="noopener noreferrer">
              <span className="text-black">réz</span><span className="text-red-500">me.</span>
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}