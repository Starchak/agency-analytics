import React, { Children, cloneElement } from 'react';

import styles from './styles.module.css';

type TabsHeaderProps = {
  children: React.ReactElement | React.ReactElement[];
  activeTab?: number;
  setActiveTab?: (index: number) => void;
};

const TabsHeader: React.FC<TabsHeaderProps> = ({
  children,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className={styles.tabs_header}>
      {Children.map(children, (child: React.ReactElement, index) => {
        const isActive = activeTab === index;
        return cloneElement(child, {
          isActive,
          index,
          setActiveTab,
        });
      })}
    </div>
  );
};

export { TabsHeader };
