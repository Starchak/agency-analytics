import React from 'react';

import styles from './styles.module.css';

type TabContentProps = {
  children: React.ReactNode;
};

const TabContent: React.FC<TabContentProps> = ({ children }) => {
  return <div className={styles.tab_content}>{children}</div>;
};

export { TabContent };
