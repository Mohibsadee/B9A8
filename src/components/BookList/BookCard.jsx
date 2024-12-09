import { useNavigate } from "react-router-dom"; 
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {

        navigate(`/books/${book.id}`, { state: { book } });
    };

    return (
        <div
            onClick={handleCardClick}
            className="card bg-base-100 rounded-2xl max-h-auto border-2 text-start shadow-md cursor-pointer"
        >
            {/* Book Image */}
            <figure>
                <img
                    src={book.image}
                    alt={book.name}
                    className="h-[350px] w-full rounded-t-2xl object-cover"
                />
            </figure>

            {/* Book Details */}
            <div className="card-body">
                {/* Tags */}
              
                <div className="flex flex-wrap gap-2 mb-2">
                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-outline badge-neutral text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title and Author */}
                <h2 className="card-title font-bold">{book.name}</h2>
                <p className="text-gray-600">By: {book.author}</p>

                <hr className="my-4 border-gray-300" />

                {/* Genre and Rating */}
                <div className="flex justify-between items-center text-base">
                    <p className="text-green-600">Genre: {book.genre}</p>
                    <p className="flex space-x-5 items-center">
                        <div>{book.rating}</div>
                        {/* Add your SVG logic here */}
                    </p>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default BookCard;
