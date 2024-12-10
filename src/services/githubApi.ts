const BASE_URL = 'https://api.github.com';

export const fetchUser = async (username: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('Usuário não encontrado');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchRepositories = async (username: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Repositórios não encontrados');
    }
    const repositories = await response.json();
    return repositories;
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    throw error;
  }
};

export const fetchRepository = async (fullname: string) => {
  try {
    const response = await fetch(`${BASE_URL}/repos/${fullname}`);
    if (!response.ok) {
      throw new Error('Repositório não encontrado');
    }
    const repository = await response.json();
    return repository;
  } catch (error) {
    console.error(`Erro ao buscar o repositório ${fullname}:`, error);
    throw error;
  }
};
