import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Components
import Details from '@components/Details';
import Gallery from '@components/Gallery';
import ServerError from '@components/ServerError';

// Reducers
import { setImages } from '@redux/slice/imagesSlice';

// Api
import { useGetImagesQuery } from '@redux/api/imagesApi';

import styles from '@styles/app.module.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data: images, error, isLoading, isSuccess } = useGetImagesQuery();

  useEffect(() => {
    // Save images to redux store if successful fetch
    if (isSuccess && images) {
      dispatch(setImages(images));
    }
  }, [isSuccess]);

  if (error) {
    return <ServerError />;
  }

  return (
    <div className={styles.app}>
      <>
        <Gallery isLoading={isLoading} />
        <Details />
      </>
    </div>
  );
};

export default App;
