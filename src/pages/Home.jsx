import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    fetchVideos,
    fetchVideoDetails,
    fetchChannelDetails,
} from "../utils/api";
import { formatViews, timeAgo, isShort } from "../utils/format";
import "./Home.css";

/* SIMPLE SHIMMER */
function Shimmer({ isSidebarOpen }) {
    return (
        <main className={isSidebarOpen ? "main-open" : "main-closed"}>
            <div className="main-container">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="yt-shimmer-card">
                        <div className="yt-shimmer-thumb shimmer-bg"></div>
                        <div className="yt-shimmer-info">
                            <div className="yt-shimmer-avatar shimmer-bg"></div>
                            <div className="yt-shimmer-text">
                                <div className="line line-1 shimmer-bg"></div>
                                <div className="line line-2 shimmer-bg"></div>
                                <div className="line line-3 shimmer-bg"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

function Home({ isSidebarOpen, query }) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!query) return;

        async function loadData() {
            setLoading(true);
            setError("");
            setVideos([]);

            try {
                const searchRes = await fetchVideos(query);

                if (!searchRes?.items?.length) {
                    throw new Error("No videos found");
                }

                const videoIds = searchRes.items.map((i) => i.id.videoId);
                const videoDetailsRes = await fetchVideoDetails(videoIds);

                const detailsMap = {};
                videoDetailsRes.items.forEach((v) => {
                    detailsMap[v.id] = v;
                });

                const finalVideos = [];

                for (const item of searchRes.items) {
                    const details = detailsMap[item.id.videoId];
                    if (!details || isShort(details.contentDetails.duration)) continue;

                    const channel = await fetchChannelDetails(item.snippet.channelId);

                    finalVideos.push({
                        videoId: item.id.videoId,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails.medium.url,
                        channelName: item.snippet.channelTitle,
                        channelImage: channel?.snippet?.thumbnails?.default?.url,
                        views: details.statistics.viewCount,
                        publishedAt: item.snippet.publishedAt,
                    });
                }

                if (!finalVideos.length) {
                    throw new Error("No long videos available");
                }

                setVideos(finalVideos);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [query]);

    /* LOADING */
    if (loading) return <Shimmer isSidebarOpen={isSidebarOpen} />;

    /* ERROR */
    if (error)
        return (
            <main className="error-screen">
                <h2>⚠️ {error}</h2>
                <p>This API went on vacation 🏖️ Try after some time.</p>
            </main>
        );

    return (
        <main className={isSidebarOpen ? "main-open" : "main-closed"}>
            <div className="main-container">
                {videos.map((video) => (
                    <Link key={video.videoId} to={`/video/${video.videoId}`} className="video-card-container">
                        <div className="image-container">
                            <img src={video.thumbnail} alt={video.title} />
                        </div>
                        <div className="text-container">
                            <div className="text-inner-first">
                                <img src={video.channelImage} alt={video.channelName} />
                            </div>
                            <div className="text-inner-second">
                                <p className="main-text">{video.title}</p>
                                <div className="account-video-details">
                                    <p className="first-para">{video.channelName}</p>
                                    <p className="second-para">
                                        <span>{formatViews(video.views)} views</span>
                                        <span> • {timeAgo(video.publishedAt)}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Home;
