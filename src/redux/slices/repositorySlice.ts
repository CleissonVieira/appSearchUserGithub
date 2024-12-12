import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repository, RepositoriesState } from '../../interfaces';

const initialState: RepositoriesState = {
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
