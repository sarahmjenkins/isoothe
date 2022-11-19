import './App.css';
import { Link } from 'react-router-dom';
import Lotus from './images/lotus-white.svg';
// import background from './images/gdibackground1.png';

function App() {
  return (
    <div className="App">
      <div className='app-contain'>

        <section className='app-sect-one'>
          <img className='app-img' src={Lotus}></img>
          <h1 className="title">iSoothe</h1>
          <h2 className="app-h2">Stress relief at your fingertips.</h2>
        </section>

        <section  className='app-sect-two'>
          <Link to="/home" className="home__link">
          <button className="enter-button" variant="link">
          Enter
          </button>
          </Link>
        </section>

      </div>
    </div>
  );
}

export default App;
