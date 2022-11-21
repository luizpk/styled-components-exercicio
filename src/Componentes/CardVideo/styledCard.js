import styled from "styled-components";

export const BoxPagPrincipal = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: stretch;
`
export const ImagemPagPricipal = styled.img`
    background-image: url{props.image1}
    width: 100%;
    height: 200px;
`

export const H4 = styled.h4`
margin-left: 20px;
`