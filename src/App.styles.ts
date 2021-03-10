import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {

    margin: 0;
    padding : 0;
    display: flex;
    justify-content: center;

  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Burger = styled.button`
display : none ;


@media (max-width: 768px)  {
  width: 3rem;
  height: 3rem;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;
}

span {
  display: block;
  width: 3rem;
  height: 2.5px;
  background: white;
}

  span:nth-child(1) {         
    transform : rotate(-45deg) , translateY(10px)
  }

  :nth-child(3) {
    transform : rotate(45deg)
  }
  :nth-child(2) {
    transform : translate(100%)
    opacity : 0
  }

` 
export const Wrapper = styled.div`
  background-image: linear-gradient(to bottom right, #1d2951, #0f4d92);
  padding: 5px;
  margin-top: 30px;
  width: 700px;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #eedc82, #eedc82);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(1px 1px #f5f5f5);
    font-size: 70px;
    text-align: center;
    margin-bottom: 25px;
    margin-top: -5px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #e5e4e2, #f5f5f5);
    border: 3px solid #eedc82;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  p {
    font-family: Fascinate Inline;
    color: #000000;
    font-weight: 200;

    font-size: 20px;
    text-align: center;

    margin-top: 5px;
  }
  span {
    font-family: Fascinate Inline;
    color: #eedc82;
    font-weight: 50;
    width: 100%;
    max-width: 100%; 
    font-size: 15px;
    text-align: center;

    margin-top: 5px;
  }

  select {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 0em .5em 2.1em;
    width: 100%;
    max-width: 100%; 
    box-sizing: border-box;
    margin-top : 10px;
    margin-bottom : 10px;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;  
  }
`;



