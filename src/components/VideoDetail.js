import React from "react";
import _ from "lodash";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const { title, description } = video.snippet;
  const { videoId } = video.id;

  const videoTitle = _.startCase(_.toLower(title));
  const videoDescription = _.toLower(description);

  const videoURL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-reponsive-item" src={videoURL} />
      </div>
      <div className="details">
        <div>
          {videoTitle}
        </div>
        <br />
        <div>
          {videoDescription}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
