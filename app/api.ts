import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching movies: ", error);
    return [];
  }
};
