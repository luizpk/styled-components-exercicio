
import {BoxPagPrincipal, ImagemPagPricipal} from "./styledCard.js"

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPagPrincipal onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </BoxPagPrincipal>
  );
}

export default CardVideo;
