import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import BookList from './BookList/BookList';
import BookDetail from './BookList/BookDetail';
import NotFound from './NotFound';

import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;

