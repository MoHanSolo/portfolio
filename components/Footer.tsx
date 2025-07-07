export default function Footer() {
    return (
        <footer className="bg-gray-100-gray-700 p-4 mt-12">
            <div className="container mx-auto text-container">
              © {new Date().getFullYear()} Brendan Mohan. All rights reserved.
            </div>
        </footer>
    )
}