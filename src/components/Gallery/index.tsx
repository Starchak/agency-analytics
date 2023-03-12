import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { Title } from '@components/Typography';
import { Tabs, TabsHeader, Tab, TabContent } from '@components/Tabs';
import Grid from '@components/Gallery/Grid';
import Loading from '@components/Gallery/Loading';

// Types
import type { RootState } from '@redux/store';

import styles from './styles.module.css';

type GalleryProps = {
  isLoading: boolean;
};

const Gallery: React.FC<GalleryProps> = ({ isLoading }) => {
  const images = useSelector((state: RootState) => state.images.images);

  return (
    <div className={styles.gallery}>
      <Title>Photos</Title>
      <Tabs>
        <TabsHeader>
          <Tab>Recently Added</Tab>
          <Tab>Favorited</Tab>
        </TabsHeader>
        <TabContent>
          {isLoading ? <Loading /> : <Grid images={images} />}
        </TabContent>
        <TabContent>
          {isLoading ? <Loading /> : <Grid images={images} />}
        </TabContent>
      </Tabs>
    </div>
  );
};

export default Gallery;
