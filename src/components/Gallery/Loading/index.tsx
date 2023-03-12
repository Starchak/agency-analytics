import React from 'react';

import styles from './styles.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      {[...Array(12)].map((_, i) => (
        <div className={styles.card} key={i}>
          <div className={`${styles.image} ${styles.animated}`} />
          <div className={`${styles.title} ${styles.animated}`} />
          <div className={`${styles.size} ${styles.animated}`} />
        </div>
      ))}
    </div>
  );
};

export default Loading;
