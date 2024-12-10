import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  email: string;
}

interface UserState {
  username: string;
  details: UserDetails | null;
}

const initialState: UserState = {
  username: '',
  details: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setUserDetails(state, action: PayloadAction<UserDetails>) {
      state.details = action.payload;
    },
  },
});

export const { setUserName, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
