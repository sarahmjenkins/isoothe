import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/home" className="home__link">
        <h1 className='home__text'>I need help now</h1>
      </Link>
    </div>
  );
}

export default App;
