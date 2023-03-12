import React from 'react';

import styles from './styles.module.css';

type TabContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const TabContent: React.FC<TabContentProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={`${styles.tab_content} ${className ? className : ''}`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

export { TabContent };
