import { useState } from "react";
import fetchMovies from "../../services/movieService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import type { Movie } from "../../types/movie";


export default function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const searchMovie = async (value: string) => {
        const newMovies = await fetchMovies(value) as Movie[];
        setMovies(newMovies);
    }
    const selectMovie = (id: number): void => {
        console.log(`select movie ${id}`);
    }
    return (
        <div className={css.app}>
        <SearchBar onSubmit={searchMovie}/>
      <ErrorMessage />
      <Loader />
      <MovieGrid movies={movies} onSelect={selectMovie}  />
      <MovieModal />
    </div>
  );
}
