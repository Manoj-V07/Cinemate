import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { UseTitle } from "../hooks/UseTitle";


export const MovieList = ({apiPath , title}) => {
  const { data : movies } = useFetch(apiPath);
  const pageTitle = UseTitle(title)

  return (
    <main>
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
