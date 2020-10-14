import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import logoImg from '../../assets/logodash.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="">
          <img
            src="https://avatars1.githubusercontent.com/u/20329308?s=460&u=1c81ef2dee315f9e36dd6a3f2bb4e0f4a663e2b1&v=4"
            alt="Jeferson Martins"
          />
          <div>
            <strong>jefersonmbs/airapp</strong>
            <p>Descrição</p>
          </div>
          <FaArrowRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars1.githubusercontent.com/u/20329308?s=460&u=1c81ef2dee315f9e36dd6a3f2bb4e0f4a663e2b1&v=4"
            alt="Jeferson Martins"
          />
          <div>
            <strong>jefersonmbs/airapp</strong>
            <p>Descrição</p>
          </div>
          <FaArrowRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars1.githubusercontent.com/u/20329308?s=460&u=1c81ef2dee315f9e36dd6a3f2bb4e0f4a663e2b1&v=4"
            alt="Jeferson Martins"
          />
          <div>
            <strong>jefersonmbs/airapp</strong>
            <p>Descrição</p>
          </div>
          <FaArrowRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
