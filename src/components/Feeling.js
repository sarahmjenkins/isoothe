import React from 'react';
import '../styles/Feeling.css';
import { Link } from 'react-router-dom';
import OptionButton from './OptionButton';
import YoutubeEmbed from './YoutubeEmbed';

const Feeling = () => {
    return ( 
        <div className='feeling-div'>
            <div className='feeling-container'>

            <h1 className='feeling-h1'>Grounding</h1>
            {/* Placeholder ocean waves video */}
            <YoutubeEmbed embedId="LIrDzA5iLtM" />

            <section>
                <h2 className='feeling-h2'>How Are You Feeling?</h2>
                <form className='feeling-form'>
                    <input placeholder='1'></input>
                    <input placeholder='2'></input>
                    <Link className='feeling-link' to={"/#"}>NEXT</Link>
                </form>
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