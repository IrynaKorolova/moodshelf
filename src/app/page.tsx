import BookCard from "@/components/BookCard";
import { Book } from "@/types/book";

const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    coverUrl: "https://placehold.co/400x600/e2e8f0/475569?text=Night+Circus",
    tags: ["magical-realism", "atmospheric", "slow-burn"],
  },
  {
    id: "2",
    title: "Mexican Gothic",
    author: "Silvia Moreno-Garcia",
    coverUrl: "https://placehold.co/400x600/e2e8f0/475569?text=Mexican+Gothic",
    tags: ["gothic", "creepy", "historical"],
  },
  {
    id: "3",
    title: "A Deadly Education",
    author: "Naomi Novik",
    coverUrl: "https://placehold.co/400x600/e2e8f0/475569?text=Deadly+Education",
    tags: ["dark-academia", "snarky-mc", "magic-school"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col py-10">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Find a book to match your <span className="text-indigo-600">mood</span>
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Forget chaotic genres. Choose the atmosphere, magic level, and tropes you actually want to read right now.
        </p>
      </div>

      {/* Book grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MOCK_BOOKS.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}