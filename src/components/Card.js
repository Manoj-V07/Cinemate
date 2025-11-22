import { Link } from "react-router-dom";
import  Backup  from "../assets/images/backup.jpg";

export const Card = ({movie}) => {

  const {id , original_title,overview, poster_path} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup;

  return (
    <div className="w-full sm:w-80 md:w-72 lg:w-80 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg w-full h-96 object-cover" src={image} alt={original_title} />
      </Link>
      <div className="p-4 flex-grow flex flex-col">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{original_title}</h5>
        </Link>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-3">{overview}</p>
      </div>
    </div>
  )
}
