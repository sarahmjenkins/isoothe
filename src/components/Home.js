import TechniqueBlock from "./TechniqueBlock";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-contain">
      <h1 className="home__heading">iSoothe</h1>
      
      <ul className="home__list">
        <TechniqueBlock techniqueName="Ground" slug="/ground"/>
        <TechniqueBlock techniqueName="Deep Breaths" />
        <TechniqueBlock techniqueName="Meditate" />
        <TechniqueBlock techniqueName="Stretch" />
        <TechniqueBlock techniqueName="Games" />
        <TechniqueBlock techniqueName="Forum & Chats" />
        <TechniqueBlock techniqueName="Resources" />
        <TechniqueBlock techniqueName="Journal" />
      </ul>
      </div>
    </div>
  )
}

export default Home;
