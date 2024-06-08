import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookshelf</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bookshelf.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Search
      </button>
    </div>
  );
};

export default BookshelfPage;
