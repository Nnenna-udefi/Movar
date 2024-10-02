import { Recommendation } from "./components/recommendation";
import { fetchMovies } from "./api";
import { Hero } from "./components/hero";

export default async function Home() {
  const allMovies = await fetchMovies();

  const likedMovies = {
    genres: [28, 35, 878],
  };
  return (
    <div className="bg-black text-white font-sans px-8">
      <Hero />
      <Recommendation likedMovies={likedMovies} allMovies={allMovies} />
    </div>
  );
}
