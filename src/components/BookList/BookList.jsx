import { useEffect, useState } from 'react';
import BookCard from './BookCard';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onWantToRead={() => alert(`You selected ${book.name}`)}
                />
            ))}
        </div>
    );
};

export default BookList;
