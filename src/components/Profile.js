import React from 'react';
import '../styles/Profile.css';
import Jane from '../images/woman.jpg';
import Lotus from '../images/lotus-white.svg';
import { Link } from 'react-router-dom';

const Profile = () => {
    return ( 
        <div>
            <div className='profile-container'>
                <nav className='profile-nav'>
                    <i class="fa-solid fa-bars"></i>
                    <img className='profile-lotus' src={Lotus}></img>
                    <i class="fa-solid fa-gear"></i>
                </nav>

            <section className='profile-section'>
                <img className='profile-pic' src={Jane} alt={'woman-profile'}></img>
                <h2 className='profile-h2'>Jane Doe's Profile</h2>

                <div className='profile-stats'>
                    <p className='profile-p1'>Statistics</p>

                    <div className='profile-streak'>
                    <p className='profile-p2'>Current Month</p>
                    <p className='profile-p3'>25</p>
                    </div>

                    <div className='profile-streak'>
                    <p className='profile-p2'>Journal Entries</p>
                    <p className='profile-p3'>12</p>
                    </div>

                    <Link className='profile-link' to={"/home"}>PROGRESS</Link>
                </div>

            </section>

            </div>
        </div>
     );
}
 
export default Profile;