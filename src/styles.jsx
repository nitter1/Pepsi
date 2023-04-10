import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;

export const Container = styled.section`
  background-color: #0261bf;
  height: 99.9vh;
  width: 98.7vw;
}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  width: 50%;
  margin-right: 1em;

  ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
  }
  li {
    font-family: Poppins, sans-serif;
    cursor: pointer;
    font-size: 20px;
    color: rgb(255, 255, 255);
    transition: transform 0.3s ease-in-out;
    transform-origin: center center;
  }

  li:hover {
    color: #81B0DF;
    cursor: pointer;
    transform: scale(1.1);

  }
`;

export const MainBox = styled.main`
  height: 80vh;
  display: flex;
  align-items: flex-end;
`;

export const TitleBox = styled.div`
width: 15vw;
height: 50vh;

`

export const TextBox = styled.section`
width: 50%;
height: 71vh;
margin-left: 4.4vw;
margin-bottom: 2.5vw;

  h1 {
    font-size: 2.5em;
    font-weight: 800;
    color: white;
    span{
      font-size: 2em;
      width: 10vw;
      font-weight: 900;
      color: white;
    }
  }

  p {
    font-size: 1em;
    width: 38.5vw;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    color: white;
  }
  button {
    width: 15vw;
    height: 6vh;
    border-radius: 20px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    color: #000000;
    font-size: 1.05rem;
  }
`;

export const Divfigure = styled.div`
display: flex;
flex-direction: end;
margin-left: 12rem
`;

export const Navaside = styled.aside`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 5vw;
margin-left: 6em;
margin-bottom: 7em;
height: 40vh;
`

export const Ulfigure = styled.figure`
display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 50vh;
    transition: all 0.6s ease-in-out 0s;
`

export const DivThemes = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-end;
position: absolute;
left: 39vw;
width: 25%;
position: relative;
bottom: 6rem;
}`

export const Copy = styled.h2`
color: white;
position: absolute;
bottom: 7.5em;
left:2.4em;
`