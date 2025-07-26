import Nav from "../src/components/Nav";
import { Roboto } from 'next/font/google'; // ✅ CORRECTO
import "./global.css"

// metadata 
export const metadata = {
  title: 'Tienda',
  description: 'My Tienda by Next.js',
  keywords: "tienda, online, ecomerce",
}

// google fonts 
const roboto = Roboto({
  weight: ["300","400","500"],
  styles: ["italic","normal"],  
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}