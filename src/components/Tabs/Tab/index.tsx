import React from 'react';

import styles from './styles.module.css';

type TabProps = {
  children: React.ReactNode;
  isActive?: boolean;
  index?: number;
  setActiveTab?: (index: number) => void;
};

const Tab: React.FC<TabProps> = ({
  children,
  isActive,
  index,
  setActiveTab,
}) => {
  return (
    <div
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={() => setActiveTab && setActiveTab(index || 0)}
    >
      {children}
    </div>
  );
};

export { Tab };
