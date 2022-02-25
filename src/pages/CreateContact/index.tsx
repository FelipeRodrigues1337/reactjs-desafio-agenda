import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header, Form } from "./styles";
import api from "../../services/api";
import { AxiosResponse } from "axios";

const CreateContact: React.FC = () => {
  const [fName, setName] = useState("");
  const [fEmail, setEmail] = useState("");
  const [fTel, setTel] = useState("");
  const history = useHistory();

  function pushToDashboard() {
    alert("Cadastrado com sucesso!");
    history.push("/");
  }

  async function handleAddRepository() {
    await api
      .post("/users", {
        name: fName,
        email: fEmail,
        telefone: fTel,
      })
      .then();
  }

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <h1>Cadastrar Contato</h1>
      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          value={fName}
          onChange={(event) => setName(event.target.value)}
          placeholder="Digite o Nome do contato"
          required
        />
        <input
          type="text"
          value={fEmail}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Digite o E-mail do contato"
          required
        />
        <input
          type="text"
          value={fTel}
          onChange={(event) => setTel(event.target.value)}
          placeholder="Digite o Telefone do contato"
          required
        />
        <button type="submit" onClick={pushToDashboard}>
          Enviar
        </button>
      </Form>
    </>
  );
};

export default CreateContact;
