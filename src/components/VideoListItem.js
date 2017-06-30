import React from "react";
import _ from "lodash";

const VideoListItem = ({ video, onVideoSelect }) => {
  const { thumbnails, title } = video.snippet;

  const imageURL = thumbnails.default.url;
  const videoTitle = _.startCase(_.toLower(title));

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-item media">
        <div className="media-left">
          <img src={imageURL} className="d-flex mr-3" />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {videoTitle}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
