const TrailerModal = ({ isOpen, onClose, trailerKey }) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/80
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-zinc-900
          rounded-2xl
          w-[min(800px,calc(100%-2rem))]
          max-h-[calc(100dvh-2rem)]
          overflow-y-auto
          p-4
          sm:p-8
        "
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-white sm:text-2xl">
            Movie Trailer
          </h2>

          <button
            onClick={onClose}
            className="
              text-white
              text-3xl
            "
          >
            ✕
          </button>
        </div>

        <iframe
          className="aspect-video h-auto w-full rounded-xl"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TrailerModal;
