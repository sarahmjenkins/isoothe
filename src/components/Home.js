import TechniqueBlock from "./TechniqueBlock";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-contain">

        <section className="home-section">
          <h1 className="home__heading">iSoothe</h1>
          <Link to={"/profile"}>
          <i class="fa-solid fa-circle-user"></i>
          </Link>
        </section>
      
      <ul className="home__list">
        <TechniqueBlock techniqueName="Ground" slug="/ground"/>
        <TechniqueBlock techniqueName="Senses" slug="/senses" />
        <TechniqueBlock techniqueName="Deep Breaths" />
        <TechniqueBlock techniqueName="Meditate" />
        <TechniqueBlock techniqueName="Stretch" />
        <TechniqueBlock techniqueName="Games" />
        <TechniqueBlock techniqueName="Forum & Chats" />
        <TechniqueBlock techniqueName="Resources" />
        <TechniqueBlock techniqueName="Journal" />
        <TechniqueBlock techniqueName="About" />
      </ul>
      </div>
    </div>
  )
}

export default Home;
