import React from 'react';
import '../styles/Feeling.css';
import { Link } from 'react-router-dom';
import Frown from '../images/frown.svg';
import Smile from '../images/smile.svg';
import OptionButton from './OptionButton';
import YoutubeEmbed from './YoutubeEmbed';

const Feeling = () => {
    return ( 
        <div className='feeling-div'>
            <div className='feeling-container'>

            <h1 className='feeling-h1'>Grounding</h1>
            {/* Placeholder ocean waves video */}
            <YoutubeEmbed embedId="LIrDzA5iLtM" />

            <section className='feeling-section'>
                <h2 className='feeling-h2'>Are You Feeling Better?</h2>
                <article className='feeling-article'>
                    <div className='feeling-face'>
                        <img className='feeling-img' src={Smile} alt={'smile-face'}></img>
                        <Link className='feeling-link' to={"/#"}>YES</Link>
                    </div>
                    <div className='feeling-face'>
                        <img className='feeling-img' src={Frown} alt={'frown-face'}>
                        </img>
                        <Link className='feeling-link' to={"/#"}>NO</Link>
                    </div>
                </article>
            </section>

            <ul className="option-container">
                <OptionButton optionName="Music" />
                <OptionButton optionName="Vibrate" />
                <OptionButton optionName="Video" />
                <OptionButton optionName="Voice" />
            </ul>
            </div>
        </div> 
    );
}
 
export default Feeling;