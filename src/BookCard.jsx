import React from 'react';

const BookCard = ({ book, onAdd }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold">Book Title: {book.title}</h2>
      <p className="text-sm text-gray-600">Edition Count: {book.edition_count}</p>
      {onAdd && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={() => onAdd(book)}
        >
          Add to Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard;
