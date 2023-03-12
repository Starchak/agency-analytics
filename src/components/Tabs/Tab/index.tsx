import React from 'react';

import styles from './styles.module.css';

type TabProps = {
  children: React.ReactNode;
  isActive?: boolean;
  index?: number;
  setActiveTab?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
};

const Tab: React.FC<TabProps> = ({
  children,
  isActive,
  index,
  setActiveTab,
  className,
  style,
}) => {
  return (
    <div
      className={`${styles.tab} ${isActive ? styles.active : ''} ${
        className ? className : ''
      }`}
      style={{ ...style }}
      onClick={() => setActiveTab && setActiveTab(index || 0)}
    >
      {children}
    </div>
  );
};

export { Tab };
