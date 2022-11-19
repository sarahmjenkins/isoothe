import React from 'react';
import '../styles/Ground.css';
import { Link } from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed';
import OptionButton from './OptionButton';

const Ground = () => {
  return (
    <div className='ground'>
      <div className='ground-contain'>
        <section>
          <h1 className='ground-h1'>Grounding</h1>
          {/* Placeholder ocean waves video */}
          <YoutubeEmbed embedId="LIrDzA5iLtM" />
        </section>

        <section>
          <Link className='five-link' to={"/Five"}>NEXT</Link>
          <ul className="option-container">
            <OptionButton optionName="Music" />
            <OptionButton optionName="Vibrate" />
            <OptionButton optionName="Video" />
            <OptionButton optionName="Voice" />
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Ground;
