import TechniqueBlock from "./TechniqueBlock";
import "../styles/home.css";
import image from "../images/home-banner-image.jpg";

const Home = () => {
  return (
    <>
      <h1 className="home__heading">iSoothe</h1>
      <img
        className="home__banner-image"
        src={image}
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
