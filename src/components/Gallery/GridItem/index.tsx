import React from 'react';

// Helpers
import { bytesToMB } from '@utils/conversion';

import styles from './styles.module.css';

type GridItemProps = {
  image: IImage;
};

const GridItem: React.FC<GridItemProps> = ({ image }) => {
  const selectItem = () => {
    console.log('select item');
  };

  return (
    <div className={styles.grid_item} onClick={selectItem}>
      <div className={styles.image_container}>
        <img src={image.url} alt={image.filename} className={styles.image} />
      </div>

      <p className={styles.item_title}>{image.filename}</p>
      <p className={styles.item_subtitle}>{`${bytesToMB(
        image.sizeInBytes
      )} MB`}</p>
    </div>
  );
};

export default GridItem;
