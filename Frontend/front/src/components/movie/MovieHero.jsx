import { useState } from "react";
import { toggleWatchlist } from "../../services/watchlistService";

const MovieHero = ({ movie, onTrailerOpen }) => {
  const [watchlistLoading, setWatchlistLoading] = useState(false);

  if (!movie) return null;

  const BACKDROP = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const POSTER = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const handleWatchlist = async () => {
    try {
      setWatchlistLoading(true);

      const movieId = movie?._id ?? movie?.id ?? movie?.tmdbId;

      if (!movieId) {
        throw new Error("Unable to add movie to watchlist: missing movie ID.");
      }

      const response = await toggleWatchlist(movieId);

      alert(response.message);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setWatchlistLoading(false);
    }
  };
  return (
    <section className="relative w-full overflow-hidden md:min-h-[80vh]">
      {/* Backdrop */}
      <img
        src={BACKDROP}
        alt={movie.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/75
        "
      />

      {/* Content */}
      <div
        className="
          relative
          container
          mx-auto
          w-full
          px-4
          py-16
          sm:px-6
          sm:py-20

          flex
          flex-col
          md:flex-row
          items-center
          gap-8
          md:gap-10
        "
      >
        {/* Poster */}

        <img
          src={POSTER}
          alt={movie.title}
          className="
            w-48
            max-w-full
            sm:w-64
            md:w-72
            rounded-2xl
            shadow-2xl
          "
        />

        {/* Info */}

        <div className="min-w-0 max-w-3xl text-white">
          <h1
            className="
              text-3xl
              sm:text-5xl
              font-black
              mb-6
            "
          >
            {movie.title}
          </h1>

          {/* Movie Meta */}

          <div
            className="
              flex
              flex-wrap
              gap-x-4
              gap-y-2
              text-base
              text-gray-300
              mb-6
            "
          >
            <span>⭐ {movie.vote_average.toFixed(1)}</span>

            <span>📅 {movie.release_date?.slice(0, 4)}</span>

            <span>⏱ {movie.runtime} min</span>
          </div>

          {/* Genres */}

          <div className="flex flex-wrap gap-3 mb-8">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-4 py-2 rounded-full bg-purple-600 text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
            <button
              className="
                bg-purple-600
                hover:bg-purple-700

                w-full px-6 sm:w-auto sm:px-8
                py-4

                rounded-xl

                font-semibold

                transition
              "
              onClick={onTrailerOpen}
            >
              ▶ Watch Trailer
            </button>

            <button
              onClick={handleWatchlist}
              disabled={watchlistLoading}
              className="w-full rounded-lg bg-purple-600 px-6 py-3 sm:w-auto"
            >
              {watchlistLoading ? "Loading..." : "❤️ Watchlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieHero;
