import Image from "next/image";
import { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Cover */}
      <div className="relative w-full aspect-2/3 bg-stone-200">
        <Image
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Information about the book */}
      <div className="p-5 flex flex-col grow">
        <h3 className="font-bold text-lg text-stone-900 leading-tight mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-stone-500 text-sm mb-4">{book.author}</p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
