import React from 'react';

// Components
import GridItem from '@components/Gallery/GridItem';

import styles from './styles.module.css';

type GridProps = {
  images: IImage[] | undefined;
};

const Grid: React.FC<GridProps> = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images?.map((image) => (
        <GridItem image={image} key={image.id} />
      ))}
    </div>
  );
};

export default Grid;
