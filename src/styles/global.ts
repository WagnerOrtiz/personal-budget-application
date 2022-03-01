import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --shape: #fff;
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
    box-sizing;
  }

  body{
    background-color: var(--background);
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
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
    pointer: cursor;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`