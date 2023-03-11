import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { SmallTitle, Subtitle, Text } from '@components/Typography';

// Reducers
import {
  addFavorited,
  deleteFavorited,
  deleteRecentlyAdded,
} from '@redux/slice/imagesSlice';

// Helpers
import { bytesToMB } from '@utils/conversion';

// Types
import type { RootState } from '@redux/store';

import styles from './styles.module.css';

const Details = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector(
    (state: RootState) => state.images.selected
  );

  const handleFavorite = () => {};
  const handleDelete = () => {};

  return (
    <div className={styles.details}>
      {selectedImage ? (
        <>
          <img
            src={selectedImage.url}
            alt={selectedImage.filename}
            className={styles.image}
          />
          <div className={styles.like_container}>
            <SmallTitle>{selectedImage.filename}</SmallTitle>
            <div onClick={handleFavorite}>Like</div>
          </div>
          <Subtitle>{`${bytesToMB(selectedImage.sizeInBytes)} MB`}</Subtitle>
          <SmallTitle>Information</SmallTitle>
          <div>
            <Subtitle>Uploaded by</Subtitle>
            <Text>{selectedImage.uploadedBy}</Text>
          </div>
          <div>
            <Subtitle>Created</Subtitle>
            <Text>{selectedImage.createdAt}</Text>
          </div>
          <div>
            <Subtitle>Last Modified</Subtitle>
            <Text>{selectedImage.updatedAt}</Text>
          </div>
          <div>
            <Subtitle>Dimensions</Subtitle>
            <Text>
              {`${selectedImage.dimensions.width}x${selectedImage.dimensions.height}`}
            </Text>
          </div>
          <div>
            <Subtitle>Resolution</Subtitle>
            <Text>
              {`${selectedImage.resolution.width}x${selectedImage.resolution.height}`}
            </Text>
          </div>
          {selectedImage.description && (
            <>
              <SmallTitle>Description</SmallTitle>
              <p>{selectedImage.description}</p>
            </>
          )}

          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        'No img selected'
      )}
    </div>
  );
};

export default Details;
