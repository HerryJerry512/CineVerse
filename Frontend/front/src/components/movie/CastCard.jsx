const CastCard = ({ actor }) => {
  const IMAGE = actor.profile_path
    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
    : "https://placehold.co/300x450?text=No+Image";

  return (
    <div
      className="
        group
        min-w-[140px] sm:min-w-[170px]
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      <img
        src={IMAGE}
        alt={actor.name}
        className="
          h-32
          w-32
          sm:h-40
          sm:w-40
          rounded-full
          object-cover
          border-4
          border-zinc-800
          transition-all
          duration-300
          group-hover:border-purple-500
        "
      />

      <h3
        className="
          mt-4
          text-white
          font-semibold
          text-center
          line-clamp-1
        "
      >
        {actor.name}
      </h3>

      <p
        className="
          text-gray-400
          text-sm
          text-center
          line-clamp-1
        "
      >
        {actor.character}
      </p>
    </div>
  );
};

export default CastCard;
