import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import BookList from '../BookList/BookList';

const Home = () => {
    return (
        <div>
            
            <Banner />
            <h1 className="mt-6 playfair-display text-4xl">Books</h1>
            <BookList/>
            {/* The nested routes will render here */}
            <Outlet />
        </div>
    );
};

export default Home;