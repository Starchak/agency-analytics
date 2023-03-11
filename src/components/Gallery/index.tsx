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
  const recentlyAddedImg = useSelector(
    (state: RootState) => state.images.recentlyAdded
  );
  const favoritedImg = useSelector(
    (state: RootState) => state.images.favorited
  );

  return (
    <div className={styles.gallery}>
      <Title>Photos</Title>
      <Tabs>
        <TabsHeader>
          <Tab>Recently Added</Tab>
          <Tab>Favorited</Tab>
        </TabsHeader>
        <TabContent>
          <Grid images={recentlyAddedImg} />
        </TabContent>
        <TabContent>
          <Grid images={favoritedImg} />
        </TabContent>
      </Tabs>
    </div>
  );
};

export default Gallery;
