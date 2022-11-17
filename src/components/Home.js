import TechniqueBlock from "./TechniqueBlock";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <h1 className="home__heading">iSoothe</h1>
      <img
        className="home__banner-image"
        src="https://unsplash.com/photos/62t_kKa2YlA"
        alt="north Iran sunset"
      />
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
    </>
  )
}

export default Home;
