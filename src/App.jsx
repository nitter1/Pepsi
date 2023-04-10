import React, { useState, useRef } from "react";
import * as S from "./styles";
import Main from "./Components/Main/Main";
import HeaderComponent from "./Components/Header/Header";
import PepsiOne from "./Components/Assets/pepsi001.png";
import PepsiTwo from "./Components/Assets/pepsi002.png";
import PepsiThree from "./Components/Assets/pepsi003.png";

export default function Pepsi(props) {
  const [background, setBackground] = useState("#0261bf");
  const [letterColor, setLetterColor] = useState("black");
  const [largeCan, setLargeCan] = useState(PepsiOne);
  const bodyRef = useRef(document.body);

  function alterarCorDeFundo(cor) {
    bodyRef.current.style.backgroundColor = cor
    bodyRef.current.style.transition = "1s";
  }

  return (
    <S.Container
      style={{
        backgroundColor: background,
        color: letterColor,
        transition: "1s",
      }}
    >
      <S.GlobalStyle />
      <HeaderComponent />
      <Main letterColor={letterColor} largeCan={largeCan}/>
      <S.DivThemes>
        <img
          className="latas"
          src={PepsiOne}
          alt="pepsi001.png"
          width="50px"
          onClick={() => {
            setBackground("#0261BF");
            setLetterColor("black");
            setLargeCan(PepsiOne);
            alterarCorDeFundo("#0261BF")
          }}
        />

        <img
          className="latas"
          src={PepsiTwo}
          alt="pepsi002.png"
          width="50px"
          onClick={() => {
            setBackground("darkred");
            setLetterColor("black");
            setLargeCan(PepsiTwo);
            alterarCorDeFundo("darkred")
          }}
        />

        <img
          onClick={() => {
            setBackground("#1F1E1F");
            setLetterColor("black");
            setLargeCan(PepsiThree);
            alterarCorDeFundo("#1F1E1F")
          }}
          className="latas"
          src={PepsiThree}
          alt="pepsi003.png"
          width="50px"
        />
      </S.DivThemes>
      <S.Copy>© Daniel Roger Nitter - 2023</S.Copy>
    </S.Container>
  );
}
