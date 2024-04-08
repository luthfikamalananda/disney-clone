import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

export default function Homepage() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const instance = useAxios();

    const getMovies = async () => {
        try {
            const fetchedMovies = await instance.get('/movies/now-playing')
            setMovies(fetchedMovies);
            console.log('filem', movies);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        isLoading ? <h1>loding bro</h1> : <><div className="main-wrapper bg-gradient-to-b from-[#091732] to-[#0f1014]">
            <h2 className="text-white">Hello World!</h2>
        </div>

            <button></button>
        </>



    )
}