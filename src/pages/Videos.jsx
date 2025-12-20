"use client"

import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchVideoDetails, fetchVideos, fetchChannelDetails } from "../utils/api"
import { formatViews, timeAgo } from "../utils/format"
import "./Videos.css"

function Videos({ isSidebarOpen }) {
  const { id } = useParams()

  const [video, setVideo] = useState(null)
  const [channel, setChannel] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [error, setError] = useState("")
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    async function loadVideo() {
      try {
        setError("")

        const videoRes = await fetchVideoDetails([id])

        if (!videoRes?.items?.length) {
          throw new Error("Video not found")
        }

        const videoData = videoRes.items[0]
        setVideo(videoData)

        if (videoData?.snippet?.channelId) {
          const channelRes = await fetchChannelDetails(videoData.snippet.channelId)
          setChannel(channelRes)
        }

        const relatedRes = await fetchVideos(videoData.snippet.title)
        setRelatedVideos(relatedRes?.items || [])
      } catch (err) {
        setError(err.message || "Something went wrong")
      }
    }

    loadVideo()
  }, [id])

  if (error) {
    return (
      <div className="error-screen-wrapper">
        <h2 className="error-screen">⚠️ {error}</h2>
      </div>
    )
  }

  if (!video) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <h2>Loading video...</h2>
      </div>
    )
  }

  return (
    <main className={isSidebarOpen ? "main-open" : "main-closed"}>
      <div className="video-page">
        {/* LEFT */}
        <div className="video-left">
          <div className="video-player-container">
            <iframe src={`https://www.youtube.com/embed/${id}`} title={video.snippet.title} allowFullScreen />
            {video.snippet.liveBroadcastContent === "live" && (
              <div className="live-badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="4" /></svg>LIVE
              </div>
            )}
          </div>

          <h1 className="video-title">{video.snippet.title}</h1>

          <div className="video-info-section">
            <div className="video-stats">
              <span>{formatViews(video.statistics.viewCount)} views</span>
              <span>•</span>
              <span>{timeAgo(video.snippet.publishedAt)}</span>
            </div>

            <div className="video-actions">
              {/* Like Button */}
              <button
                className={`action-btn ${isLiked ? "active" : ""}`}
                onClick={() => {
                  setIsLiked(!isLiked)
                  if (isDisliked) setIsDisliked(false)}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                <span>{formatViews(video.statistics.likeCount)}</span>
              </button>

              {/* Dislike Button */}
              <button
                className={`action-btn ${isDisliked ? "active" : ""}`}
                onClick={() => { setIsDisliked(!isDisliked) 
                if (isLiked) setIsLiked(false)}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" /></svg>
              </button>

              <div className="action-divider"></div>

              {/* Share Button */}
              <button className="action-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> <circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" /> <circle cx="18" cy="19" r="3" /> <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /> <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                <span>Share</span>
              </button>

              {/* Download Button */}
              <button className="action-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                <span>Download</span>
              </button>

              {/* Save Button */}
              <button className={`action-btn ${isSaved ? "active" : ""}`} onClick={() => setIsSaved(!isSaved)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <span>Save</span>
              </button>

              {/* More Button */}
              <button className="action-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <circle cx="12" cy="12" r="2" /> <circle cx="19" cy="12" r="2" /> <circle cx="5" cy="12" r="2" /></svg>
              </button>
            </div>
          </div>

          {channel && (
            <div className="channel-section">
              <div className="channel-info">
                <img src={channel.snippet.thumbnails.default.url || "/placeholder.svg"} alt={channel.snippet.title} className="channel-avatar"/>
                <div className="channel-details">
                  <h3 className="channel-name">{channel.snippet.title}</h3>
                  <p className="channel-subscribers">{formatViews(channel.statistics.subscriberCount)} subscribers</p>
                </div>
              </div>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          )}

          <div className={`description-section ${isDescriptionExpanded ? "expanded" : ""}`}>
            <div className="description-header">
              <span className="description-stats">{formatViews(video.statistics.viewCount)} views</span>
              <span className="description-date">{timeAgo(video.snippet.publishedAt)}</span>
            </div>
            <div className="description-content">
              <p>{video.snippet.description || "No description available"}</p>
            </div>
            <button className="description-toggle" onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
              {isDescriptionExpanded ? "Show less" : "Show more"}
            </button>
          </div>

          <div className="comments-section">
            <div className="comments-header">
              <h3>{formatViews(video.statistics.commentCount)} Comments</h3>
              <button className="sort-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> <line x1="3" y1="6" x2="21" y2="6" /> <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="18" x2="15" y2="18" /></svg>
                Sort by
              </button>
            </div>

            <div className="comment-input-section">
              <div className="comment-avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="#aaa">
                  <circle cx="20" cy="20" r="20" />
                </svg>
              </div>
              <input type="text" placeholder="Add a comment..." className="comment-input" />
            </div>

            <div className="comments-list">
              {/* Sample Comments */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="comment-item">
                  <div className="comment-avatar">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="#666">
                      <circle cx="20" cy="20" r="20" />
                    </svg>
                  </div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">@user{i}</span>
                      <span className="comment-time">{i} days ago</span>
                    </div>
                    <p className="comment-text">This is a sample comment. Great video!</p>
                    <div className="comment-actions">
                      <button className="comment-action-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                        <span>125</span>
                      </button>
                      <button className="comment-action-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                        </svg>
                      </button>
                      <button className="comment-action-btn">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="video-right">
          <div className="related-header">
            <button className="filter-chip active">All</button>
            <button className="filter-chip">From {channel?.snippet?.title}</button>
          </div>

          <div className="related-videos-list">
            {relatedVideos.map(
              (item) =>
                item.id?.videoId && (
                  <Link key={item.id.videoId} to={`/video/${item.id.videoId}`} className="related-video">
                    <div className="related-thumbnail">
                      <img src={item.snippet.thumbnails.medium.url || "/placeholder.svg"} alt={item.snippet.title} loading="lazy"/>
                      {item.snippet.liveBroadcastContent === "live" && <span className="related-live-badge">LIVE</span>}
                    </div>
                    <div className="related-info">
                      <h4 className="related-title">{item.snippet.title}</h4>
                      <p className="related-channel">{item.snippet.channelTitle}</p>
                      <div className="related-stats">
                        <span>1.2M views</span>
                        <span>•</span>
                        <span>{timeAgo(item.snippet.publishedAt)}</span>
                      </div>
                    </div>
                  </Link>
                ),
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Videos
