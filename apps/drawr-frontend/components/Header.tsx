import Link from "next/link"
import { Pencil } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Pencil className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Drawr</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
