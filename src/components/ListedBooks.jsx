import React, { useState, useEffect } from "react";
import ListedCard from "./ListedCard";

const ListedBooks = () => {
    const [sortCriteria, setSortCriteria] = useState(""); // Initially empty for "Sort"
    const [readBooks, setReadBooks] = useState(JSON.parse(localStorage.getItem("readBooks")) || []);
    const [wishlistBooks, setWishlistBooks] = useState(JSON.parse(localStorage.getItem("wishlistBooks")) || []);

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };



    // Sorting logic

    const sortBooks = (books) => {
        if (sortCriteria === "name") {
            return [...books].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortCriteria === "rating") {
            return [...books].sort((a, b) => b.rating - a.rating);
        } else if (sortCriteria === "pages") {
            return [...books].sort((a, b) => b.pages - a.pages);
        } else if (sortCriteria === "year") {
            return [...books].sort((a, b) => b.year - a.year);
        }
        return books; // Return unsorted if no criteria is selected
    };




    useEffect(() => {


        setReadBooks((prev) => sortBooks(prev));
        setWishlistBooks((prev) => sortBooks(prev));



    }, [sortCriteria]);






    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold p-4 bg-slate-300 rounded-xl text-gray-800 mb-4">Books</h1>

            {/* Sort Dropdown */}
            <div className="relative inline-block text-left mb-4">
                <select
                    value={sortCriteria}
                    onChange={handleSortChange}
                    className="px-4 py-4 border custom-green text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                >
                    <option value="" disabled>
                        Sort
                    </option>
                    <option value="name" className="bg-white text-black">Name</option>
                    <option value="rating" className="bg-white text-black">Rating</option>
                    <option value="pages" className="bg-white text-black">Number of Pages</option>
                    <option value="year" className="bg-white text-black">Publisher Year</option>
                </select>
            </div>



            {/* Tabs */}
            <div role="tablist" className="tabs tabs-lifted">
                {/* Read Tab */}
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ul className="space-y-4">
                        {readBooks.length > 0 ? (
                            readBooks.map((book) => <ListedCard key={book.id} book={book} />)
                        ) : (
                            <p>Too bad, it's empty!</p>
                        )}
                    </ul>
                </div>



                {/* Wishlist Tab */}
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Wishlist Books"
                    defaultChecked
                />

                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ul className="space-y-4">
                        {wishlistBooks.length > 0 ? (
                            wishlistBooks.map((book) => <ListedCard key={book.id} book={book} />)
                        ) : (
                            <p>Too bad, it's empty!</p>
                        )}
                    </ul>
                </div>

                
            </div>
        </div>
    );
};

export default ListedBooks;
