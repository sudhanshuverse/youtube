import { useParams, Link } from "react-router-dom";
import "./Watch.css";

const relatedVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "React Tutorial for Beginners",
    channel: "Code Academy",
    views: "1.2M views",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
  },
  {
    id: "9bZkp7q19f0",
    title: "Build YouTube Clone with React",
    channel: "Dev Ed",
    views: "820K views",
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg",
  },
  {
    id: "3tmd-ClpJxA",
    title: "JavaScript Tips You Should Know",
    channel: "JS Mastery",
    views: "540K views",
    thumbnail: "https://i.ytimg.com/vi/3tmd-ClpJxA/mqdefault.jpg",
  },
];

function Watch() {
  const { id } = useParams();

  return (
    <div className="watch">
      <div className="watch-left">
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            allowFullScreen
          />
        </div>

        <h1 className="video-title">
          Amazing React Video Tutorial
        </h1>

        <div className="video-meta">
          <span>1,234,567 views</span>
          <span>•</span>
          <span>2 days ago</span>
        </div>
      </div>

      <aside className="watch-right">
        {relatedVideos.map(video => (
          <Link
            to={`/watch/${video.id}`}
            key={video.id}
            className="related-video"
          >
            <img src={video.thumbnail} alt={video.title} />

            <div className="related-info">
              <h4>{video.title}</h4>
              <p>{video.channel}</p>
              <span>{video.views}</span>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}

export default Watch;
