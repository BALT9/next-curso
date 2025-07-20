import Link from "next/link";

function NotFound() {
    return (
        <>
            <h1>404</h1>
            <p>pagina no encontrada</p>
            <Link href={"/"} >Volver al inicio</Link>
        </>
    )
}

export default NotFound;