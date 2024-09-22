// app/page.tsx
import { Recommendation } from "./recommendation";
import { fetchMovies } from "./api";
import { Hero } from "./hero";

// Page Component
export default async function Home() {
  // Fetch movies using the helper function
  const allMovies = await fetchMovies();

  const likedMovies = {
    genres: [28, 35, 878],
  };
  return (
    <div className="bg-black text-white font-custom">
      <h1 className="font-medium text-3xl p-3 tracking-wide">MOVAR</h1>
      <Hero />
      <Recommendation likedMovies={likedMovies} allMovies={allMovies} />
    </div>
  );
}
