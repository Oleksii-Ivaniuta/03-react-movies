import type { Movie } from "../../types/movie";
import css from "./MovieModal.module.css";

interface MovieModalProps {
  onClose: () => void;
  movie: Movie[];
}

export default function MovieModal({ onClose, movie }: MovieModalProps) {
  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <button onClick={onClose} className={css.closeButton} aria-label="Close modal">
          &times;
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie[0].poster_path}`}
          alt={movie[0].title}
          className={css.image}
        />
        <div className={css.content}>
          <h2>{movie[0].title}</h2>
          <p>{movie[0].overview}</p>
          <p>
            <strong>Release Date:</strong> {movie[0].release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie[0].vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
