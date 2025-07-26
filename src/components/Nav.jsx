import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Menú</h1>
        <ol className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-colors">Sobre Nosotros</Link>
          </li>
          <li>
            <Link href="/tienda" className="hover:text-blue-400 transition-colors">Tienda</Link>
          </li>
          <li>
            <Link href="/tienda/categoria" className="hover:text-blue-400 transition-colors">Categoría</Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-blue-400 transition-colors">Posts</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}
