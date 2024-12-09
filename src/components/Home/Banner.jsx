import { useNavigate } from 'react-router-dom';
import BookImage from '../../assets/images/book.png';

const Banner = () => {
    const navigate = useNavigate();

    const handleBookList = () => {
        navigate('/listed-books'); 
    };

    return (
        <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-3xl lg:text-5xl py-4 font-bold text-gray-800 mb-4">
                        Books to freshen up
                        your bookshelf
                    </h1>
                    <button
                        onClick={handleBookList}
                        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600"
                    >
                        View The List
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={BookImage}
                        alt="Book Banner"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
