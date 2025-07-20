import Link from "next/link";

export const metadata = {
  title: 'Tienda Amiga',
  description: 'My Tienda by Next.js',
  keywords: "tienda, online, ecomerce",
}

function TiendaLayout({ children }) {
    return (
        <>
            <nav>
                <h3>Menu Seccion Tienda</h3>
                <ol>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/about">Sobre Nosotros</Link></li>
                    <li><Link href="/tienda">Tienda</Link></li>
                    <li><Link href="/tienda/categoria">categoria</Link></li>
                </ol>
            </nav>
            {children}
        </>
    )
}

export default TiendaLayout;