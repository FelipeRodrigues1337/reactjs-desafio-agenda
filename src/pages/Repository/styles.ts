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

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr;
    list-style: none;
    margin-top: 40px;
    margin-bottom: 10%;
    gap: 3em;

    li {
      h2 {
        display: block;
        font-size: 25px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }

    @media only screen and (max-width: 1290px) {
      display: block;
      li {
        margin-top: 1em;
      }
      li h2 {
        font-size: 20px;
      }
    }
  }

  .btn-delete {
    -webkit-border-radius: 11;
    -moz-border-radius: 11;
    border-radius: 19px;
    font-family: Arial;
    color: #ffffff;
    font-size: 19px;
    background: #c42b33;
    padding: 12px 20px 10px 20px;
    text-decoration: none;
    border: none;
  }

  .btn-delete:hover {
    background: #a30c0c;
    text-decoration: none;
  }

  .avatar-block {
    display: block;
  }
`;

export const Form = styled.form`
  margin-top: 2%;
  border: solid 1px grey;
  border-radius: 15px;
  display: block;
  padding: 3%;

  @media only screen and (max-width: 475px) {
    padding: 5% 10% 5% 10%;
  }

  .formtext {
    position: relative;
    top: -48px;
    background: white;
    padding: 7px;
    width: 57px;
    color: black;
  }

  input {
    margin-bottom: 2%;
    background-color: #f3f6f4;
    border: solid 1px #5b5b5b;
    font-size: 19px;
    color: #757575;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }
`;

export const AvatarInput = styled.div`
  label {
    font-size: 19px;
    padding: 11px 20px 10px 20px;

    color: #fff;
    border-radius: 19px;
    cursor: pointer;
    transition: background-color 0.2s;
    background-color: #19bf0d;

    input {
      display: none;
    }

    &:hover {
      background: #ffb13d;
    }
  }
`;

export const Button = styled.button`
  margin-top: 2%;
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

  &:hover {
    background-color: #56c41f;
  }
`;
