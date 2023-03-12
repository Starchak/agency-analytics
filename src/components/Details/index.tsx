import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { SmallTitle, Subtitle, Text } from '@components/Typography';
import Button from '@components/Button';
import Modal from '@components/Modal';

// Reducers
import {
  updateImage,
  deleteImage,
  setSelected,
} from '@redux/slice/imagesSlice';

// Helpers
import { bytesToMB } from '@utils/conversion';
import { formatDate } from '@utils/format';

// Types
import type { RootState } from '@redux/store';

import { ReactComponent as EmptyDataIcon } from '@img/empty_data_icon.svg';
import { ReactComponent as FavoriteIcon } from '@img/favorite_icon.svg';
import { ReactComponent as FavoriteFilledIcon } from '@img/favorite_icon_filled.svg';

import styles from './styles.module.css';

const Details: React.FC = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector(
    (state: RootState) => state.images.selected
  );

  // State to handle modal open/close
  const [deleteModal, setDeleteModal] = useState(false);

  // Add/Remove image from favorite
  const handleFavorite = () => {
    if (selectedImage) {
      dispatch(
        updateImage({ ...selectedImage, favorited: !selectedImage.favorited })
      );
      dispatch(
        setSelected({ ...selectedImage, favorited: !selectedImage.favorited })
      );
    }
  };

  // Delete image, Remove Selected Image and close modal
  const handleDelete = () => {
    setDeleteModal(false);
    dispatch(deleteImage(selectedImage ? selectedImage.id : ''));
    dispatch(setSelected(null));
  };

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
            {selectedImage.favorited ? (
              <FavoriteFilledIcon
                className={styles.favorite_icon}
                onClick={handleFavorite}
              />
            ) : (
              <FavoriteIcon
                className={styles.favorite_icon}
                onClick={handleFavorite}
              />
            )}
          </div>
          <Subtitle>{`${bytesToMB(selectedImage.sizeInBytes)} MB`}</Subtitle>
          <div className={styles.row}>
            <SmallTitle className={styles.information}>Information</SmallTitle>
            <p />
          </div>
          <div className={styles.row}>
            <Subtitle className={styles.bolder_subtitle}>Uploaded by</Subtitle>
            <Text>{selectedImage.uploadedBy}</Text>
          </div>
          <div className={styles.row}>
            <Subtitle className={styles.bolder_subtitle}>Created</Subtitle>
            <Text>{formatDate(selectedImage.createdAt)}</Text>
          </div>
          <div className={styles.row}>
            <Subtitle className={styles.bolder_subtitle}>
              Last Modified
            </Subtitle>
            <Text>{formatDate(selectedImage.updatedAt)}</Text>
          </div>
          <div className={styles.row}>
            <Subtitle className={styles.bolder_subtitle}>Dimensions</Subtitle>
            <Text>
              {`${selectedImage.dimensions.width}x${selectedImage.dimensions.height}`}
            </Text>
          </div>
          <div className={styles.row}>
            <Subtitle className={styles.bolder_subtitle}>Resolution</Subtitle>
            <Text>
              {`${selectedImage.resolution.width}x${selectedImage.resolution.height}`}
            </Text>
          </div>
          {selectedImage.description && (
            <div className={styles.description}>
              <SmallTitle>Description</SmallTitle>
              <Subtitle className={styles.description_text}>
                {selectedImage.description}
              </Subtitle>
            </div>
          )}

          <Button
            onClick={() => setDeleteModal(true)}
            className={styles.delete_btn}
            type='delete'
          >
            Delete
          </Button>
          <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
            <SmallTitle>Are you sure you want to delete this image?</SmallTitle>
            <div className={styles.delete_modal_buttons}>
              <Button onClick={() => setDeleteModal(false)} type='submit'>
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                type='delete'
                style={{ marginLeft: '2rem' }}
              >
                Delete
              </Button>
            </div>
          </Modal>
        </>
      ) : (
        <div className={styles.no_img_selected}>
          <EmptyDataIcon />
          <p className={styles.no_img_text}>Nothing to see here</p>
        </div>
      )}
    </div>
  );
};

export default Details;
