import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-stone-800 tracking-tight">
          Moodshelf
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/cabinet" 
                className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
              >
                Your Cabinet
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}