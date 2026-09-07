import { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";

const MovieCategory = ({ title, fetchMovies }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await fetchMovies();
        setMovies(data || []);
      } catch (err) {
        console.error(err);
        setError("Unable to load movies right now.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [fetchMovies]);

  return (
    <main className="min-h-screen bg-black">
      <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="mb-6 text-3xl font-bold text-white sm:mb-8 sm:text-4xl">
          {title}
        </h1>

        {loading && <p className="text-gray-400">Loading movies...</p>}

        {error && !loading && <p className="text-red-400">{error}</p>}

        {!loading && !error && movies.length === 0 && (
          <p className="text-gray-400">No movies found.</p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id || movie.tmdbId || movie._id}
                movie={movie}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default MovieCategory;
