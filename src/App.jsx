import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./components/Root"; // Corrected import path
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks";
import ToRead from "./components/ToRead";
import BookDetail from "./components/BookList/BookDetail"; // Import BookDetail component

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Root Layout */}
                <Route path="/" element={<Root />}>
                    {/* Nested Routes */}
                    <Route index element={<Home />} />
                    <Route path="listed-books" element={<ListedBooks />} />
                    <Route path="to-read" element={<ToRead />} />
                    <Route path="books/:id" element={<BookDetail />} /> {/* Add dynamic route for BookDetail */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
