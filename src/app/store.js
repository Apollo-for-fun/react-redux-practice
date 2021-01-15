import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import photoSlice from '../features/photo/photoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    photo: photoSlice,
  },
});
