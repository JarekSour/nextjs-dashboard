import { monserrat, inter } from './ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}

        <footer className="flex items-center justify-center py-5">
          Hecho con ❤️
        </footer>
      </body>
    </html>
  );
}
