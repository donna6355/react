import React, {useState} from 'react'
import MovieCard from './MovieCard'

const SearchMovie = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (evt) => {
        evt.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=7517ae8c211569342decbac5212869ea&language=ko-KR&query=${query}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    
    }
    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">영화 제목</label>
                    <input className="input" name="query" type="text" placeholder="베테랑" 
                    value={query} onChange={(evt) => setQuery(evt.target.value)}/>
                <button type="submit" className="button">Search</button>
            </form>
            {movies.filter(movie => movie.poster_path).map(movie => <MovieCard data={movie}/>)}
        </>
    )
}

export default SearchMovie