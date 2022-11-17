import { Link } from "react-router-dom";
import "../styles/techniqueBlock.css";

const TechniqueBlock = ({ techniqueName, slug }) => {
  return (
    <Link to={slug}>
      <li className="item-container">
        <h3 className="item-title">{ techniqueName }</h3>
      </li>
    </Link>
  )
}

export default TechniqueBlock;
