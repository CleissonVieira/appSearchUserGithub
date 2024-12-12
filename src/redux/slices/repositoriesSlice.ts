import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepositoriesState, Repository } from '../../interfaces';

const initialState: RepositoriesState = {
  list: [],
  order: 'desc',
};

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
      state.list = sortRepositories(action.payload, state?.order ?? "asc");
    },
    setOrder(state, action: PayloadAction<'asc' | 'desc'>) {
      state.order = action.payload;
      state.list = sortRepositories(state?.list ?? [], state.order);
    },
  },
});

export const { setRepositories, setOrder } = repositorySlice.actions;
export default repositorySlice.reducer;
