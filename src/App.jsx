import {useEffect, useState} from 'react'
import './App.css'
import Search from "./Components/SearchBar.jsx";
import Loader from "./Components/Loader.jsx";
import Card from "./Components/Card.jsx";

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    }
}


function App() {

    //This useState HOOK is used to manage the actions on the Search bar...
    const[searchTerm, setSearchTerm] = useState('');

    const[errorMessage, setErrorMessage] = useState('');

    const[isLoading, setIsLoading] = useState(false);

    const[movieList, setMovieList] = useState([]);

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');
        try{
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS);
            if(!response.ok){
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            if(data.Response==='False')
            {
                setErrorMessage(data.Response);
                setMovieList([]);
                return;
            }
            setMovieList(data.results || []);
        }
        catch(error){
            console.log(`Error Fetching Movies ${error}`);
            setErrorMessage(data.error || 'Failed to  Fetch Movies');
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchMovies();
    },[]);

  return (
    <main>
        <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="../public/hero-img.png" alt="" />
                    <h1>Find <span className = "text-gradient">Movies</span> You'll Enjoy</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>
                <section className="all-movies">
                    <h2 className="mt-[20px]">ALl Movies</h2>
                    {
                        isLoading ?(
                            <Loader/>
                        ) : errorMessage ? (
                            <p className="text-red-500">{errorMessage}</p>
                        ):(
                            <ul>
                                {movieList.map((movie) => (
                                    <Card key={movie.id} movie={movie}/>
                                ))}
                            </ul>
                        )
                    }
                </section>
            </div>
    </main>
  )
}

export default App
