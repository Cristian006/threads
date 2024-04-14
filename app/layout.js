import { Inconsolata } from "next/font/google";
import { ThemeProvider } from "./components/theme/themeProvider";
import "./globals.css";

const inter = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "Thread",
  description: "Share Connections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
