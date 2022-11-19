import './App.css';
import { Link } from 'react-router-dom';
// import background from './images/gdibackground1.png';

function App() {
  return (
    <div className="App">
      <h1 className="title">iSoothe</h1>

      <Link to="/home" className="home__link">
        <button className="enter-button" variant="link">
          Enter
        </button>
      </Link>

    </div>
  );
}

export default App;
