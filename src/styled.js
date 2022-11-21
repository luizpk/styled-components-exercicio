import styled from "styled-components";


export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const HeaderStyled = styled.header`
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10%;
`

export const MainStyled = styled.main`
    min-height: 80%;
    display: flex;
`

export const MenuVertical = styled.menu`
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
`

export const BotoesMenu = styled.li`
    list-style-type: none;
`

export const PainelVideos = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
`
export const Footer = styled.footer`
    background: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px;
`

export const H4 = styled.h4`
    margin-left: 20px;
`
