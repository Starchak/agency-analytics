import React from 'react';

// Components
import Title from '@components/Title';
import { Tabs, TabsHeader, Tab, TabContent } from '@components/Tabs';

import styles from './styles.module.css';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <Title>Photos</Title>
      <Tabs>
        <TabsHeader>
          <Tab>Recently Added</Tab>
          <Tab>Favorite</Tab>
        </TabsHeader>
        <TabContent>Tab 1</TabContent>
        <TabContent>Tab 2</TabContent>
      </Tabs>
    </div>
  );
};

export default Gallery;
