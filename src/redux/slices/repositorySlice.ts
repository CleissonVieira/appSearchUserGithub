import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Repository {
  id: number;
  full_name: string;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

interface RepositoryState {
  details: Repository | null;
}

const initialState: RepositoryState = {
  details: null,
};

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    setRepositoryDetails(state, action: PayloadAction<Repository>) {
      state.details = action.payload;
    },
  },
});

export const { setRepositoryDetails } = repositorySlice.actions;
export default repositorySlice.reducer;
