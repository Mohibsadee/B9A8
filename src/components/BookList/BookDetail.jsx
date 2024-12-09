import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const BookDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const [bookDetails, setBookDetails] = useState(location.state?.book || null);
    const [readList, setReadList] = useState(JSON.parse(localStorage.getItem('readBooks')) || []);
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlistBooks')) || []);

    useEffect(() => {
        
        
        
        if (!bookDetails) {
         

            const fetchBookDetails = async () => {
                try {
                    const response = await fetch('/books.json'); 
                    const data = await response.json();
                    const book = data.find((b) => b.id === parseInt(id, 10));
                    setBookDetails(book);
                } catch (error) {
                    console.error('Failed to fetch book details:', error);
                }
            };
            fetchBookDetails();
        }

    }, [id, bookDetails]);


    // Add to the read list

    const handleReadButton = () => {
    
        const newReadList = [...readList, bookDetails];
        setReadList(newReadList);
        localStorage.setItem('readBooks', JSON.stringify(newReadList));


    };


    // Add to the wishlist

    const handleWishlistButton = () => {
        
        const newWishlist = [...wishlist, bookDetails];
        setWishlist(newWishlist);
        localStorage.setItem('wishlistBooks', JSON.stringify(newWishlist));
    };



    if (!bookDetails) {
        return <div>Loading...</div>;
    }


    
    return (
        <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section: Book Image */}
            <div className="md:w-1/3 flex justify-center bg-gray-100 rounded-lg p-16 shadow-md items-center">
                <img
                    src={bookDetails.image}
                    alt={bookDetails.name}
                    className="rounded-lg shadow-lg object-contain h-full max-h-full"
                />
            </div>

            {/* Right Section: Book Details */}
            <div className="md:w-2/3 text-start">
                <h1 className="text-3xl font-bold mb-4 playfair-display">{bookDetails.name}</h1>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                    By: <span className="font-semibold">{bookDetails.author}</span>
                </p>
                <hr className='my-4'></hr>
                <p className="text-lg text-gray-700 mt font-medium">{bookDetails.genre}</p>
                <hr className='my-4'></hr>
                <p className="text-base text-gray-600 leading-7 mb-6 whitespace-pre-line">{bookDetails.plot}</p>

                <div className="flex flex-row items-center text-sm font-medium text-green-600 mb-6">
                    <p className="mb-1 p-4">Tag:</p>
                    <div className="space-x-3">
                        {bookDetails.tags.map((tag, index) => (
                            <span key={index} className="px-4 py-2 bg-green-50 border-2 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <hr className='my-4'></hr>

                <div className="grid grid-cols-2 gap-2 mb-6">
                    <div>
                        <p className="text-gray-700">Number of Pages:</p>
                        <p className="text-gray-700">Publisher:</p>
                        <p className="text-gray-700">Year of Publishing:</p>
                        <p className="text-gray-700">Rating:</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-bold">{bookDetails.pages}</p>
                        <p className="text-gray-600 font-bold">{bookDetails.publisher}</p>
                        <p className="text-gray-600 font-bold">{bookDetails.year}</p>
                        <p className="text-gray-600 font-bold">{bookDetails.rating}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <button className="bg-white-600 text-black px-4 py-2 border-2 rounded-md hover:bg-green-50" onClick={handleReadButton}>
                            Read
                        </button>
                        <button className="custom-blue text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={handleWishlistButton}>
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
