
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  // selectPhotos,
  fetchPhotos,
} from './photoSlice';
// import styles from './Photo.module.css';

export function Photo() {
  // const photos = useSelector(selectPhotos);
  const dispatch = useDispatch();
  dispatch(fetchPhotos())

  return (
    <div>
      <h1>test</h1>
      {/* {photos.map(photo => {
        return(
          <div>test</div>
        )
      })} */}
      </div>
  );
}
