import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState , useEffect, use } from "react"

export const MovieDetail = () => {

  const params = useParams();
  const [ data , setData ] = useState({});

  useEffect(() => {
    async function fetchMovie(){
      const response = awiat fetch()
    }

  return (
    <main>
      <section>
        <div>

        </div>
        <div>

        </div>
      </section>
    </main>
  )
}
