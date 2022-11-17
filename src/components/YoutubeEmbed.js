import React from 'react';
import PropTypes from 'prop-types';
import '../styles/YoutubeEmbed.css';

const YoutubeEmbed = ({ embedID }) => {

  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

YoutubeEmbed.propTypes ={
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;