"use client"

import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { fetchVideosByCategory } from "../utils/api"
import "./Home.css"

function Home() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const category = params.get("category") || "trending"

  useEffect(() => {
    let mounted = true
    setLoading(true)

    fetchVideosByCategory(category)
      .then((data) => {
        if (!mounted) return

        if (data.error) {
          setError(data.error.message)
        } else {
          setVideos(data.items || [])
        }
        setLoading(false)
      })
      .catch(() => {
        if (mounted) {
          setError("Failed to load videos")
          setLoading(false)
        }
      })

    return () => {
      mounted = false
    }
  }, [category])

  if (error) {
    return (
      <div className="home-container">
        <p className="error-message">{error}</p>
      </div>
    )
  }

  return (
    <div className="home-container">
      <h2 className="category-title">{category.toUpperCase()}</h2>

      <div className="video-grid">
        {loading
          ? // Shimmer loading skeletons
            Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="video-card shimmer">
                <div className="thumbnail-skeleton"></div>
                <div className="video-info">
                  <div className="channel-avatar-skeleton"></div>
                  <div className="video-details">
                    <div className="title-skeleton"></div>
                    <div className="title-skeleton short"></div>
                    <div className="meta-skeleton"></div>
                  </div>
                </div>
              </div>
            ))
          : // Actual video cards
            videos.map((video) => {
              const videoId = video.id.videoId || video.id

              return (
                <div key={videoId} className="video-card" onClick={() => navigate(`/watch/${videoId}`)}>
                  <div className="thumbnail-wrapper">
                    <img
                      src={video.snippet.thumbnails.medium.url || "/placeholder.svg"}
                      alt={video.snippet.title}
                      className="thumbnail"
                    />
                  </div>
                  <div className="video-info">
                    <div className="channel-avatar">
                      <img
                        src={`https://i.pravatar.cc/36?u=${video.snippet.channelId}`}
                        alt={video.snippet.channelTitle}
                      />
                    </div>
                    <div className="video-details">
                      <h3 className="video-title">{video.snippet.title}</h3>
                      <p className="channel-name">{video.snippet.channelTitle}</p>
                      <p className="video-meta">
                        {Math.floor(Math.random() * 1000)}K views • {Math.floor(Math.random() * 12)} hours ago
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default Home
