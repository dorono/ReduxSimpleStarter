import React from 'react';
// below is equivalent to:
// const VideoListItem = (props) => {
//  const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    // notice the onclick callback is an anonymous function containing the onVideoSelect function
    // (I would have though that could just do onVideoSelect(video))
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>

    </li>
  )
};

export default VideoListItem;
