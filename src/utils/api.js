const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function fetchVideosByCategory(category) {
  let url = "";

  if (category === "trending") {
    url = `${BASE_URL}/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=12&key=${API_KEY}`;
  } else {
    url = `${BASE_URL}/search?part=snippet&type=video&maxResults=12&q=${category}&key=${API_KEY}`;
  }

  const res = await fetch(url);
  return res.json();
}
