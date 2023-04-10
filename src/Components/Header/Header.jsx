import React from "react";
import Logo from "../Assets/logo.png";
import * as S from "../../styles"
export default function HeaderComponent() {
  
  return (

   <S.Header>
      <div>
        <img id="logo" src={Logo} alt="Logo da pespi" />
      </div>
      <S.NavHeader>
        <ul>
          <li> Home </li>
          <li> Produtos </li>
          <li> Novidades </li>
          <li> Newsletter </li>
          <li> Contatos </li>
        </ul>
      </S.NavHeader>
    </S.Header>
  );
}
