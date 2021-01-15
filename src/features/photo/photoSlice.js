
import { createSlice } from '@reduxjs/toolkit';
import {getPhoto} from '../../api/photo';

export const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    collection: []
  },
  reducers: {
    addPhoto: (state, action) => {
      // console.log(action.payload);
      state.collection = action.payload
    }
  },
});

export const { addPhoto } = photoSlice.actions;


export const fetchPhotos = () => dispatch => {
  return getPhoto().then(res => {
    // console.log(`get photo : ${JSON.stringify(res)}`);
    dispatch(addPhoto(res))
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPhotos = state => state.photo.collection
// export const selectStep = state => state.counter.step

export default photoSlice.reducer;
