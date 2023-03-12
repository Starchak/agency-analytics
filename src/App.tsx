import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Components
import Details from '@components/Details';
import Gallery from '@components/Gallery';

// Reducers
import { setImages } from '@redux/slice/imagesSlice';

// Api
import { useGetImagesQuery } from '@redux/api/imagesApi';

import styles from '@styles/app.module.css';

const App = () => {
  const dispatch = useDispatch();
  const { data: images, error, isLoading, isSuccess } = useGetImagesQuery();

  useEffect(() => {
    // Save images to redux store if successful fetch
    if (isSuccess && images) {
      dispatch(setImages(images));
    }
  }, [isSuccess]);

  return (
    <div className={styles.app}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Gallery />
          <Details />
        </>
      )}
    </div>
  );
};

export default App;
