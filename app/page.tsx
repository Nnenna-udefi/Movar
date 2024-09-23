// app/page.tsx
import { Recommendation } from "./components/recommendation";
import { fetchMovies } from "./api";
import { Hero } from "./components/hero";

// Page Component
export default async function Home() {
  // Fetch movies using the helper function
  const allMovies = await fetchMovies();

  const likedMovies = {
    genres: [28, 35, 878],
  };
  return (
    <div className="bg-black text-white font-custom px-8">
      <Hero />
      <Recommendation likedMovies={likedMovies} allMovies={allMovies} />
    </div>
  );
}
