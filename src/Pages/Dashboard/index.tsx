import React, { useState, FormEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import api from '../../services/api';

import logoImg from '../../assets/logodash.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  login: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a
            key={repository.full_name}
            href={`https://github.com/${repository.full_name}`}
            target="_blank"
          >
            <img src={repository.owner.avatar_url} alt={repository.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FaArrowRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
