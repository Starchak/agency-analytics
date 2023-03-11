import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Text, Subtitle } from '@components/Typography';

// Reducers
import { setSelected } from '@redux/slice/imagesSlice';

// Helpers
import { bytesToMB } from '@utils/conversion';

// Types
import type { RootState } from '@redux/store';

import styles from './styles.module.css';

type GridItemProps = {
  image: IImage;
};

const GridItem: React.FC<GridItemProps> = ({ image }) => {
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (state: RootState) => state.images.selected?.id
  );

  const selectItem = () => {
    dispatch(setSelected(image));
  };

  console.log(selectedId);

  return (
    <div className={styles.grid_item} onClick={selectItem}>
      <div
        className={`${styles.image_container} ${
          selectedId === image.id ? styles.active : ''
        }`}
      >
        <img src={image.url} alt={image.filename} className={styles.image} />
      </div>

      <Text className={styles.item_title}>{image.filename}</Text>
      <Subtitle>{`${bytesToMB(image.sizeInBytes)} MB`}</Subtitle>
    </div>
  );
};

export default GridItem;
