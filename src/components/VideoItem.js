import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <h3>{video.snippet.title}</h3>
    </div>
  );
};

export default VideoItem;
