import { inter, shadowsIntoLight } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import type { Metadata } from "next";
import TopNav from '@/app/ui/home/top-nav';
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Home',
  },
  description: "Generated by create next app",
  icons: {
    icon:'./icon.ico',
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title.default}</title>
      </head>
      <body className={`bg-fixed bg-cover ${inter.className}`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
