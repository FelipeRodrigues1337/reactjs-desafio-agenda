import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }
`;

export const Form = styled.form`
  border: thin solid grey;
  padding: 2rem;
  margin: 2rem;
  display: flex;
  display: block;
  justify-content: center;

  .formtext {
    position: relative;
    top: -48px;
    background: white;
    padding: 7px;
    width: 57px;
    color: black;
  }

  input {
    margin-top: 2%;
    background-color: #f3f6f4;
    border: solid 1px #5b5b5b;
    font-size: 19px;
    color: #757575;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }

  button {
    margin-top: 5%;
    margin-left: 40%;
    background-color: #3f9d17;
    border: solid 1px;
    font-size: 19px;
    color: white;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
    -moz-border-radius: 9px;
    -webkit-border-radius: 9px;
    border-radius: 19px;
  }
`;
