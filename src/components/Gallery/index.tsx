import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { Title } from '@components/Typography';
import { Tabs, TabsHeader, Tab, TabContent } from '@components/Tabs';
import Grid from '@components/Gallery/Grid';

// Types
import type { RootState } from '@redux/store';

import styles from './styles.module.css';

const Gallery = () => {
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
          <Grid images={images} />
        </TabContent>
        <TabContent>
          <Grid images={images.filter((image) => image.favorited)} />
        </TabContent>
      </Tabs>
    </div>
  );
};

export default Gallery;
