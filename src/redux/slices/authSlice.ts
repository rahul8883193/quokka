import {useNavigation} from '@react-navigation/native';
import {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../../types/authTypes';
import {RootState} from '../store';

const initialState: AuthState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login

    setUser(state, action: PayloadAction<any>) {
      state.currentUser = action?.payload;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

//dispatch direct into actions
export const {setUser} = authSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state?.auth?.currentUser;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
