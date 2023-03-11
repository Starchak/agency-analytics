import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Components
import Details from '@components/Details';
import Gallery from '@components/Gallery';

// api
import { useGetImagesQuery } from '@redux/api/imagesApi';

// Reducers
import { setRecentlyAdded } from '@redux/slice/imagesSlice';

import styles from '@styles/app.module.css';

const App = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, isSuccess } = useGetImagesQuery();

  useEffect(() => {
    // If data is we got images from the server then we
    // sort them by createdAt date and dispatch them to the store
    if (isSuccess && data) {
      dispatch(setRecentlyAdded(data));
    }
  }, [isSuccess]);

  return (
    <div className={styles.app}>
      <Gallery />
      <Details />
    </div>
  );
};

export default App;
