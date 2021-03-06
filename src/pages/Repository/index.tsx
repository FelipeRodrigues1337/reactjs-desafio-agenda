import React, { useEffect, useState, ChangeEvent } from "react";
import { useRouteMatch, Link, useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header, RepositoryInfo, Form, AvatarInput, Button } from "./styles";
import api from "../../services/api";
import fullImageUrl from "../../services/avatarBaseURL";
import defaultAvatar from "../../assets/defaultAvatar.png";

interface RepositoryParams {
  repository: string;
}

interface ContactModel {
  id: string;
  name: string;
  email: string;
  telefone: string;
  avatar: string;
}

const Repository: React.FC = () => {
  const [contact, setContact] = useState<ContactModel | null>(null);
  const { params } = useRouteMatch<RepositoryParams>();
  const [fName, setName] = useState("");
  const [fEmail, setEmail] = useState("");
  const [fTel, setTel] = useState("");
  const history = useHistory();

  useEffect(() => {
    api.get(`users/${params.repository}`).then((response) => {
      setContact(response.data);
    });
  }, [params.repository]);

  async function handleUpdateRepository() {
    const response = await api.put(`/users/update/${params.repository}`, {
      name: fName,
      email: fEmail,
      telefone: fTel,
    });
    if (response) {
      alert("Atualizado com sucesso! 🔥");
    } else {
      alert("Erro ao atualizar ❄");
    }
    window.location.reload();
  }

  async function handleAvatarUpdate(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const data = new FormData();
      data.append("avatar", e.target.files[0]);
      api
        .patch(`/users/avatar/${params.repository}`, data)
        .then(() => history.push("/"));
    }
  }

  async function handleRemoveRepository() {
    await api.delete(`/users/remove/${params.repository}`).then();
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
      {contact && (
        <RepositoryInfo>
          <header>
            <div className="avatar-block">
              {contact.avatar ? (
                <img
                  src={`${fullImageUrl}/files/${contact.avatar}`}
                  alt="Foto do contato"
                />
              ) : (
                <img src={defaultAvatar} alt="Avatar padrão" />
              )}
              <AvatarInput>
                <label htmlFor="avatar">
                  Alterar avatar
                  <input
                    type="file"
                    id="avatar"
                    onChange={(e) => handleAvatarUpdate(e)}
                  />
                </label>
              </AvatarInput>
            </div>
          </header>
          <ul>
            <li>
              <h2>{contact.name}</h2>
              <span>Nome</span>
            </li>
            <li>
              <h2>{contact.email}</h2>
              <span>E-mail</span>
            </li>
            <li>
              <h2>{contact.telefone}</h2>
              <span>Telefone</span>
            </li>
            <li>
              <button className="btn-delete" onClick={handleRemoveRepository}>
                Deletar Contato
              </button>
            </li>
          </ul>
          <h1>Atualizar Contato</h1>
          <Form>
            <input
              type="text"
              value={fName}
              onChange={(event) => setName(event.target.value)}
              placeholder="Nome"
              required
            />
            <input
              type="text"
              value={fEmail}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="text"
              value={fTel}
              onChange={(event) => setTel(event.target.value)}
              placeholder="Telefone"
              required
            />
          </Form>
          <Button onClick={handleUpdateRepository}>Atualizar</Button>
        </RepositoryInfo>
      )}
    </>
  );
};
export default Repository;
