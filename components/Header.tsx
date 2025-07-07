import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav> 
        </header>
    )
}