import React from 'react';
import VideoListItem from './video_list_item';

// when in a function/const, what we see below as the props argument gives us the props,
// however, in a class, to get the props, we must use this.props
const VideoList = (props) => {
  const videoItems = props.videos.map( (video) => {
    // whenever we repeat, we need a 'key' property, that has to be unique
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );

};

export default VideoList;
