import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { UseTitle } from "../hooks/UseTitle";

export const Search = ({apiPath}) => {
  
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  
  const { data : movies } = useFetch(apiPath , queryTerm);
  const pageTitle = UseTitle(`Search Result For ${queryTerm}`);
 

  return (
    <main>
      <section className="py-7 px-4">
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-white text-center">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          )) }
        </div>
      </section>
    </main>
  )
}
