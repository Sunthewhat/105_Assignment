import Duck from "../assets/Duck.png";
import Dice from "../assets/Dice.png";
import Amogus from "../assets/Amongus.png";
import "../styles/Gallery.css";

function Gallery() {
  return (
    <section>
      <h2>Gallery</h2>
      <ul>
        <li>
          <img src={Duck} width="200px"></img>
        </li>
        <li>
          <img src={Dice} width="200px"></img>
        </li>
        <li>
          <img src={Amogus} width="200px"></img>
        </li>
      </ul>
    </section>
  );
}
export default Gallery;
