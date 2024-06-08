import React, { useState } from 'react';
import BookCard from './BookCard';
import { RotatingLines } from 'react-loader-spinner';

const BookSearchPage = ({ addToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (query.length > 2) {
      setLoading(true);
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => {
          setResults(data.docs);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setResults([]);
    }
  };

  const isBookInBookshelf = (book) => {
    return bookshelf.some((shelfBook) => shelfBook.key === book.key);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Search</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search for a book"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
        >
          Search
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {results.map(book => (
            <BookCard
              key={book.key}
              book={book}
              onAdd={!isBookInBookshelf(book) ? addToBookshelf : null}
            />
          ))}
        </div>
      )}
      <button
        onClick={() => window.location.href = '/bookshelf'}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Go to My Bookshelf
      </button>
    </div>
  );
};

export default BookSearchPage;
