import { createGlobalStyle } from "styled-components";

import githubBackground from "../assets/github.svg";

export default createGlobalStyle`
 *{
     margin: 0%;
     padding:0;
     outline: 0;
     box-sizing: border-box;
 }

 body{
     background:#F0F0F5 url(${githubBackground}) no-repeat 70% top;
     -webkit-font-smoothing: antialiased;
 }

 body,input,button{
    font: 16px Roboto, sans-serif;
 }

 #root{
    margin-left: 15%;
    margin-right: 15%;
    padding: 40px 20px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 475px) {
        margin-left: 0%;
    margin-right: 0%;
  }
 }

 button{
     cursor: pointer;
 }
 
`;
