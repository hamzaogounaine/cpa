
import "./globals.css";

import Navbar from "@/component/navbar";



export const metadata = {
  title: "Super Stuff",
  description: "Your free accounts provider",
};
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}

        <Analytics />
      </body>
    </html>
  );
}
