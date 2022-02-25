import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header, Form, Button } from "./styles";
import api from "../../services/api";

const CreateContact: React.FC = () => {
  const [fName, setName] = useState("");
  const [fEmail, setEmail] = useState("");
  const [fTel, setTel] = useState("");
  const history = useHistory();

  async function handleAddRepository() {
    const response = await api.post(`/users`, {
      name: fName,
      email: fEmail,
      telefone: fTel,
    });
    if (response) {
      alert("Cadastrado com sucesso! 🔥");
    } else {
      alert("Erro ao cadastrar ❄");
    }
    history.push("/");
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
      <Form>
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
      </Form>
      <Button className="btn-submit" onClick={handleAddRepository}>
        Enviar
      </Button>
    </>
  );
};

export default CreateContact;
