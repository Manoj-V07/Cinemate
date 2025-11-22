import PageNotFoundImg from '../assets/images/pagenotfound.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { UseTitle } from '../hooks/UseTitle';

export const PageNotFound = () => {

  const pageTitle = UseTitle("Page Not Found");
    
  return (
    <main>
      <section className = "flex flex-col justify-center items-center px-4 py-8">
        <div className="flex flex-col items-center my-4 max-w-2xl">
          <p className='text-5xl sm:text-6xl md:text-7xl text-gray-700 font-bold my-10 dark:text-white text-center'>404, Oops!</p>
          <div className = "w-full max-w-md">
            <img className="rounded-lg w-full h-auto shadow-lg" src={PageNotFoundImg} alt= "404 Page Not Found" />
          </div>
        </div>
        <div className='flex justify-center my-8'>
          <Link to = "/">
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
