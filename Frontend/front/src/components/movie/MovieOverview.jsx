const MovieOverview = ({ overview }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-5 text-2xl font-bold text-white sm:mb-6 sm:text-3xl">
          Overview
        </h2>

        <p
          className="
            text-gray-300
            text-base
            leading-7
            sm:text-lg
            sm:leading-8
          "
        >
          {overview}
        </p>
      </div>
    </section>
  );
};

export default MovieOverview;
