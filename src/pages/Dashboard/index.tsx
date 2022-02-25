import React, { useState, useEffect } from "react";
import { Title, Contacts } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/agenda.png";
import { RiShareForward2Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import api from "../../services/api";
import fullImageUrl from "../../services/avatarBaseURL";
import defaultAvatar from "../../assets/defaultAvatar.png";

interface ContactModel {
  id: string;
  name: string;
  email: string;
  telefone: string;
  avatar: string;
}

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<ContactModel[]>(() => {
    return [];
  });

  useEffect(() => {
    api.get("/users/").then((response) => {
      setContacts(response.data);
    });
  }, []);

  return (
    <>
      <img src={Logo} alt="Agenda" />
      <Title>Lista de Contatos</Title>
      {/* https://gotech.tech */}
      <Contacts>
        <Link to={`/create`} className="link-create">
          <h2>Adicionar</h2>
          <AiOutlineUserAdd size={30} />
        </Link>
        {contacts.map((contact) => (
          <Link key={contact.id} to={`/repositories/${contact.id}`}>
            {contact.avatar ? (
              <img
                src={`${fullImageUrl}/files/${contact.avatar}`}
                alt="Foto do contato"
              />
            ) : (
              <img src={defaultAvatar} alt="Avatar padrão" />
            )}
            <div className="infos">
              <p>
                <b>Nome: </b>
                {contact.name}
              </p>

              <p>
                <b>Email: </b>
                {contact.email}
              </p>
              <p>
                <b>Telefone: </b>
                {contact.telefone}
              </p>
            </div>
            <RiShareForward2Line size={20} />
          </Link>
        ))}
      </Contacts>
    </>
  );
};

export default Dashboard;
