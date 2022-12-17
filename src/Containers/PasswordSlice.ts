import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PasswordState {
  value:string;
  isRight:boolean;
}

const initialState:PasswordState = {
  value:'',
  isRight:false,
}

export const passwordSlice = createSlice({
  name:'password',
  initialState,
  reducers: {
    increment:(state , action:PayloadAction<string>) => {
      if(state.value.length < 4 ) {
        state.value += action.payload;
      }
    },
    decrement:(state) => {
      state.value = '';
    },
    decreaseBy:(state) => {
      state.value = state.value.slice(0, -1);
    },
    increaseBy:(state) => {
      state.isRight = state.value === '1234';
    },
  }
})

export const passwordReducer = passwordSlice.reducer;
export const {increment,decrement, decreaseBy, increaseBy} = passwordSlice.actions;
