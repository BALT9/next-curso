import Nav from "../components/Nav"

export const metadata = {
  title: 'Tienda',
  description: 'My Tienda by Next.js',
  keywords: "tienda, online, ecomerce",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}