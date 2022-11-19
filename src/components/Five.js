import React from 'react';
import '../styles/Five.css';
import { Link } from 'react-router-dom';
import Music from '../images/b-music.png';
import Vibe from '../images/b-vibe.png';
import Play from '../images/b-play.png';
import Voice from '../images/b-voice.png';
import OptionButton from './OptionButton';
import YoutubeEmbed from './YoutubeEmbed';

const Five = () => {
    return ( 
        <div className='five-div'>
            <div className='five-container'>

            <h1 className='five-h1'>Grounding</h1>
            {/* Placeholder ocean waves video */}
            <YoutubeEmbed embedId="LIrDzA5iLtM" />

            <section className='five-section'>
                <h2 className='five-h2'>List 5 Things You Can See</h2>
                <form className='five-form'>
                    <input placeholder='1'></input>
                    <input placeholder='2'></input>
                    <input placeholder='3'></input>
                    <input placeholder='4'></input>
                    <input placeholder='5'></input>
                    <Link className='five-link' to={"/Feeling"}>NEXT</Link>
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
 
export default Five;