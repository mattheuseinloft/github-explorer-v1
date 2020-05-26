import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/11603445?s=460&u=2807121cd8b5c082fdcf8e90973677b2800b3f43&v=4"
            alt="Mattheus Einloft"
          />
          <div>
            <strong>mattheuseinloft/gobarber-api</strong>
            <p>Node.js Backend for GoBarber, a barber scheduling application</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/11603445?s=460&u=2807121cd8b5c082fdcf8e90973677b2800b3f43&v=4"
            alt="Mattheus Einloft"
          />
          <div>
            <strong>mattheuseinloft/gobarber-api</strong>
            <p>Node.js Backend for GoBarber, a barber scheduling application</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/11603445?s=460&u=2807121cd8b5c082fdcf8e90973677b2800b3f43&v=4"
            alt="Mattheus Einloft"
          />
          <div>
            <strong>mattheuseinloft/gobarber-api</strong>
            <p>Node.js Backend for GoBarber, a barber scheduling application</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
