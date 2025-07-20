import Link from "next/link";

export default function Nav() {
    return (
        <>
            <nav>
                <h1>Menu</h1>
                <ol>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/about">Sobre Nosotros</Link></li>
                    <li><Link href="/tienda">Tienda</Link></li>
                    <li><Link href="/tienda/categoria">categoria</Link></li>
                </ol>
            </nav>
        </>
    )
}
