import arr from "./env.js";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

// start with first key
let currentKeyIndex = 0;

function getCurrentKey() {
  return arr[currentKeyIndex];
}

function switchKey() {
  currentKeyIndex = (currentKeyIndex + 1) % arr.length;
  console.warn("🔁 Switched to API key index:", currentKeyIndex);
}

async function fetchWithKeyRotation(urlBuilder) {
  let attempts = 0;

  while (attempts < arr.length) {
    const key = getCurrentKey();
    const url = urlBuilder(key);

    const res = await fetch(url);
    const data = await res.json();

    // SUCCESS
    if (!data?.error) {
      return data;
    }

    const reason = data.error?.errors?.[0]?.reason;

    // QUOTA ERROR → switch key
    if (reason === "quotaExceeded" || reason === "dailyLimitExceeded") {
      switchKey();
      attempts++;
      continue;
    }

    // OTHER ERRORS
    throw new Error(data.error.message);
  }

  throw new Error("❌ All API keys have exceeded their quota");
}

export function fetchVideos(query) {
  return fetchWithKeyRotation(
    (key) =>
      `${BASE_URL}/search?part=snippet&type=video&maxResults=50&q=${query}&key=${key}`
  );
}

export function fetchVideoDetails(videoIds) {
  return fetchWithKeyRotation(
    (key) =>
      `${BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${videoIds.join(
        ","
      )}&key=${key}`
  );
}

export function fetchChannelDetails(channelId) {
  return fetchWithKeyRotation(
    (key) =>
      `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${key}`
  ).then((data) => data.items[0]);
}
