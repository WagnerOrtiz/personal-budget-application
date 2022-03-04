import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fff;
    --background: #f0f2f5;
    --text: #969CB3;
    --title: #363F5F;
    --red: #E62E4D;
    --green: #33CC95;
    --blue: #5429CC;
    --lightblue: #6933ff;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--background);
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }


  html{
    @media(max-width: 1080px){
      font-size: 93.75%;  //16px
    }

    @media(max-width: 720px){
      font-size: 87.5%;  //15px
    }
  }

  button{
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .overlay-modal{
    background-color: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-modal{
    width: 100%;
    max-width: 600px;
    background-color: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.2rem;
  }

  .close-button{
    width: 30px;
    height: 35px;
    position: absolute;
    top:2rem;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
  }
`