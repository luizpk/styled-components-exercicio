import React from "react";
import CardVideo from "./Componentes/CardVideo/CardVideo.js";
import "./styles.css";
import {createGlobalStyle} from 'styled-components';
import { HeaderStyled, TelaInteira, MainStyled, MenuVertical, BotoesMenu, PainelVideos, Footer, H4 
 } from "./styled.js";

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <TelaInteira>
        <HeaderStyled>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderStyled>

        <MainStyled>
          <MenuVertical>
            <ul>
              <BotoesMenu>Início</BotoesMenu>
              <BotoesMenu>Em alta</BotoesMenu>
              <BotoesMenu>Inscrições</BotoesMenu>
              <hr />
              <BotoesMenu>Originais</BotoesMenu>
              <BotoesMenu>Histórico</BotoesMenu>
            </ul>
          </MenuVertical>

          <PainelVideos>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </PainelVideos>
        </MainStyled>

        <Footer>
          <H4>Oi! Eu moro no footer!</H4>
        </Footer>
      </TelaInteira>
    </div>
  );
}
