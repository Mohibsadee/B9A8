import React from 'react';
import { Link } from 'react-router-dom';

const ListedCard = ({ book }) => {
    return (
        <li className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Book Image */}
                <img
                    src={book.image}
                    alt={book.name}
                    className="w-full md:w-32 md:h-48 object-cover rounded-md"
                />

                {/* Book Details */}
                <div className="text-start flex-1">
                    <h2 className="text-xl font-semibold text-gray-700">{book.name}</h2>
                    <p className="text-sm text-gray-500">By: {book.author}</p>

                    {/* Tag and Publishing Info */}
                    <div className="flex flex-col md:flex-row text-sm text-gray-500 gap-4 mt-2">
                        <div className="flex flex-wrap items-center space-x-2">
                            <span className="font-medium text-green-600">Tag:</span>
                            {book.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-green-50 border rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div>
                            <span className="font-medium">Year of Publishing:</span> {book.year}
                        </div>
                    </div>

                    {/* Publisher and Page Info */}
                    <div className="flex flex-col md:flex-row text-sm text-gray-500 gap-4 mt-2">
                        <span className="flex items-center">
                            <svg
                                width="20px"
                                height="20px"
                                fill="#8a8a8a"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z" />
                            </svg>
                            Publisher: {book.publisher}
                        </span>
                        <span className="flex items-center">
                            <svg
                                width="20px"
                                height="20px"
                                fill="#bababa"
                                className="mx-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                            >
                                <path d="M19.5 2c-.276.004-.504.224-.5.5v4c0 .815.656 1.5 1.47 1.5h4.03c.67 0 .654-1 0-1h-4.03c-.26 0-.47-.207-.47-.5v-4c.004-.282-.218-.504-.5-.5zM8.47 0C7.657 0 7 .685 7 1.5v23c0 .815.656 1.5 1.47 1.5h17.06c.814 0 1.47-.685 1.47-1.5v-18c0-.133-.053-.26-.146-.354l-6-6C20.76.053 20.634 0 20.5 0zm0 1h11.823L26 6.707V24.5c0 .293-.21.5-.47.5H8.47c-.26 0-.47-.207-.47-.5v-23c0-.293.21-.5.47-.5zm-4 3C3.657 4 3 4.685 3 5.5v23c0 .815.656 1.5 1.47 1.5h17.06c.814 0 1.47-.685 1.47-1.5v-1c.01-.676-1.01-.676-1 0v1c0 .293-.21.5-.47.5H4.47c-.26 0-.47-.207-.47-.5v-23c0-.293.21-.5.47-.5h1.06c.675.01.675-1.01 0-1z" />
                            </svg>
                            Page {book.pages}
                        </span>
                    </div>

                    {/* Category, Rating, and View Details */}
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-2">
                        <p className="text-sm text-blue-950 border px-4 py-2 rounded-full">
                            Category: {book.genre}
                        </p>
                        <p className="text-sm text-yellow-950 border px-4 py-2 rounded-full">
                            Rating: {book.rating}
                        </p>
                        <Link
                            to={`/books/${book.id}`}
                            className="text-sm bg-green-500 text-white px-4 py-2 rounded-full"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ListedCard;
