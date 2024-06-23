import { inter } from '@/app/ui/fonts'
import '@/app/ui/global.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>{children}</>
  );
}
