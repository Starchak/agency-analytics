import React from 'react';

import styles from './styles.module.css';

const ServerError: React.FC = () => {
  /* References
   * Tired Sweet Dreams GIF By KeaBabies via GIPHY
   * https://giphy.com/gifs/keababies-sleeping-hedgehog-cute-pet-mZtd62JFmSz4z7eU1W
   */

  return (
    <div className={styles.server_error}>
      <iframe
        src='https://giphy.com/embed/mZtd62JFmSz4z7eU1W'
        width='480'
        height='270'
        allowFullScreen
      ></iframe>
      <p>
        Sorry, our server is tired. <br />
        Give it some rest and try again later
      </p>
    </div>
  );
};

export default ServerError;
