import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  [key: string]: any; // Permitindo qualquer outro campo
}

interface RepositoriesState {
  list: Repository[];
  order: 'asc' | 'desc';
}

const initialState: RepositoriesState = {
  list: [],
  order: 'desc',
};

// Função que ordena os repositórios com base na ordem de estrelas
const sortRepositories = (repositories: Repository[], order: 'asc' | 'desc') => {
  return repositories.sort((a, b) => {
    if (order === 'asc') {
      return a.stargazers_count - b.stargazers_count;
    } else {
      return b.stargazers_count - a.stargazers_count;
    }
  });
};

const repositorySlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    setRepositories(state, action: PayloadAction<Repository[]>) {
      state.list = sortRepositories(action.payload, state.order);
    },
    setOrder(state, action: PayloadAction<'asc' | 'desc'>) {
      state.order = action.payload;
      state.list = sortRepositories(state.list, state.order); // Reordena a lista ao alterar a ordem
    },
  },
});

export const { setRepositories, setOrder } = repositorySlice.actions;
export default repositorySlice.reducer;
