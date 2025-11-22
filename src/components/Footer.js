import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
      <footer className="bg-white shadow-md dark:bg-gray-800 mt-auto">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:py-6 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-gray-500 text-center sm:text-left dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://cinemate-sigma.vercel.app/movies/popular" target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Popular</a>
              </li>
              <li>
                <a href="https://cinemate-sigma.vercel.app/movies/top" target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Top Rated</a>
              </li>
              <li>
                <a href="https://cinemate-sigma.vercel.app/movies/upcoming" target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Upcoming</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
 )
}
