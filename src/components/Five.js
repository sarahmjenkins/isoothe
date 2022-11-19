import React from 'react';
import '../styles/Five.css';
import { Link } from 'react-router-dom';
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
                <OptionButton optionName="Music" />
                <OptionButton optionName="Vibrate" />
                <OptionButton optionName="Video" />
                <OptionButton optionName="Voice" />
            </ul>
            </div>
        </div> 
    );
}
 
export default Five;