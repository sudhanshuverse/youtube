const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

/* Search videos */
export async function fetchVideos(query) {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`
  );
  return res.json();
}

/* Video stats (views + duration) */
export async function fetchVideoDetails(videoIds) {
  const res = await fetch(
    `${BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${videoIds.join(",")}&key=${API_KEY}`
  );
  return res.json();
}


/* Channel data (image only) */
export async function fetchChannelDetails(channelId) {
  const res = await fetch(
    `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items[0];
}
