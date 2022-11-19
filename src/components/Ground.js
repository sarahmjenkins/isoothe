import React from 'react';
import '../styles/Ground.css';
import { Link } from 'react-router-dom';
import Music from '../images/b-music.png';
import Vibe from '../images/b-vibe.png';
import Play from '../images/b-play.png';
import Voice from '../images/b-voice.png';
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
        
        <section className='ground-section'>
                <h2 className='ground-h2'>Select A Video</h2>
                <h3 className='ground-h3'>Kitten Playing</h3>
                <h3 className='ground-h3'>Snow Falling</h3>
                <h3 className='ground-h3'>Leaves Falling</h3>
                <h3 className='ground-h3'>Water Droplets On Leaves</h3>
                <h3 className='ground-h3'>Rain On A Lake</h3>
                <h3 className='ground-h3'>No Video</h3>
            </section>

        <Link className='ground-link' to={"/Five"}>NEXT</Link>

        <section>
          <ul className="option-container">
                <OptionButton optionImg={Music} optionName="Music" />
                <OptionButton optionImg={Vibe} optionName="Vibrate" />
                <OptionButton optionImg={Play} optionName="Video" />
                <OptionButton optionImg={Voice} optionName="Voice" />
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Ground;
