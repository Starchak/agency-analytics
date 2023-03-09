import React from 'react';

// Components
import Details from '@components/Details';
import Gallery from '@components/Gallery';

import styles from '@styles/app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Gallery />
      <Details />
    </div>
  );
};

export default App;
