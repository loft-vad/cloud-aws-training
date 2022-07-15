import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

interface DarkmodeState {
  isDarkmode: boolean
}

const initialState: DarkmodeState = {
  isDarkmode: false
}

export const darkmodeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.isDarkmode = !state.isDarkmode;
    }
  },
});

export const { toggleDarkmode } = darkmodeSlice.actions;
export const checkIsDarkmode = (state: RootState) => state.darkTheme.isDarkmode;

export default darkmodeSlice.reducer;