import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MeetingPrep Pro - AI meeting preparation automation',
  description: 'Value Proposition: Automatically gathers context, participant info, and relevant documents for upcoming meetings, delivering structured briefings directly to calendars to eliminate prep time.

Target Customer: Knowledge workers, consultants, account managers, executives who attend multiple client/stakeholder meetings daily

---
Category: Micro-SaaS
Target Market: Knowledge workers, consultants, account managers, executives who attend multiple client/stakeholder meetings daily
Source Hypothesis ID: 31a00595-a03f-4df1-9836-bea829d5ab62
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">MeetingPrep Pro - AI meeting preparation automation</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
