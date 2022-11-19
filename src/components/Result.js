import React from 'react';
import '../styles/Result.css';
import { Link } from 'react-router-dom';
import Music from '../images/b-music.png';
import Vibe from '../images/b-vibe.png';
import Play from '../images/b-play.png';
import Voice from '../images/b-voice.png';
import YoutubeEmbed from './YoutubeEmbed';
import OptionButton from './OptionButton';

const Result = () => {
    return ( 
        <div>
            <div className='result-container'>

            <h1 className='result-h1'>Grounding</h1>
            {/* Placeholder ocean waves video */}
            <YoutubeEmbed embedId="LIrDzA5iLtM" />

            <section className='result-section'>
                <h2 className='result-h2'>Great! Now that you are feeling better, do you know what triggered the attack?</h2>
                <form className='result-form'>
                    <textarea placeholder='Share your thoughts here'></textarea>
                    <Link className='result-link' to={"/home"}>SHARE</Link>
                </form>
            </section>

            <ul className="option-container">
                <OptionButton optionImg={Music} optionName="Music" />
                <OptionButton optionImg={Vibe} optionName="Vibrate" />
                <OptionButton optionImg={Play} optionName="Video" />
                <OptionButton optionImg={Voice} optionName="Voice" />
            </ul>
            </div>

        </div> 
    );
}
 
export default Result;