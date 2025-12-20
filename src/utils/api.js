const API_KEYS = [
  import.meta.env.VITE_YOUTUBE_API_KEY_1,
  import.meta.env.VITE_YOUTUBE_API_KEY_2,
];

const BASE_URL = "https://www.googleapis.com/youtube/v3";

/* Get random API key */
function getRandomApiKey() {
  const index = Math.floor(Math.random() * API_KEYS.length);
  return API_KEYS[index];
}

/* Generic fetch using random API key */
async function fetchWithRandomKey(urlBuilder) {
  const key = getRandomApiKey();
  const url = urlBuilder(key);

  const res = await fetch(url);
  const data = await res.json();

  // Handle quota / key error safely
  if (data?.error) {
    throw new Error(data.error.message);
  }

  return data;
}

/* ===========================
   API FUNCTIONS
   =========================== */

/* Search videos */
export function fetchVideos(query) {
  return fetchWithRandomKey(
    (key) =>
      `${BASE_URL}/search?part=snippet&type=video&maxResults=50&q=${query}&key=${key}`
  );
}

/* Video stats + snippet */
export function fetchVideoDetails(videoIds) {
  return fetchWithRandomKey(
    (key) =>
      `${BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${videoIds.join(
        ","
      )}&key=${key}`
  );
}

/* Channel data */
export function fetchChannelDetails(channelId) {
  return fetchWithRandomKey(
    (key) =>
      `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${key}`
  ).then((data) => data.items[0]);
}
