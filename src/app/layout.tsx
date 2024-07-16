import { inter, shadowsIntoLight } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import  ContextWrapper  from'./context-wrapper';
import type { Metadata } from "next";

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
      <body className={`bg-fixed bg-[url('/polygon-scatter.svg')] bg-cover ${inter.className}`}>
        <ContextWrapper>{children}</ContextWrapper>
      </body>
    </html>
  );
}
