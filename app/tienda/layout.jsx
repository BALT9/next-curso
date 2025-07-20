import Link from "next/link";

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