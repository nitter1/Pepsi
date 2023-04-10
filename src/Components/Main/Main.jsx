import React from "react";
import * as S from "../../styles.jsx";
import Facebook from "../Assets/facebook.png"
import Twitter from "../Assets/twitter.png"
import Instagram from "../Assets/instagram.png"

export default function Main(props, largeCan) {
    
  return (
    <>
      <S.MainBox>
        <S.TextBox style={{ color: props.letterColor }}>
            <S.TitleBox style={{ color: props.letterColor }}>
          <h1>THAT'S WHAT<span>I LIKE</span></h1>
          </S.TitleBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            sapiente aspernatur possimus odio accusantium inventore. Vel
            perferendis molestias a unde eum dolorem officia doloremque!
            Doloribus asperiores quas vitae quisquam libero.
          </p>
          <button style={{ color: props.letterColor }}>VIEW ALL PRODUCTS</button>
        </S.TextBox>
        <S.Divfigure>
        <img src={props.largeCan} alt="pepsi001.png" width="225px" />
        </S.Divfigure>
        <S.Navaside>
            <S.Ulfigure>
                <img className="redes" src={Facebook} alt="Facebook" width="23px"/>
                <img className= "redes" src={Twitter} alt="Twitter" width="45px"/>
                <img className="redes" src={Instagram} alt="Instagram" width="42px"/>
            </S.Ulfigure>
        </S.Navaside>
      </S.MainBox>
    </>
  );
}
