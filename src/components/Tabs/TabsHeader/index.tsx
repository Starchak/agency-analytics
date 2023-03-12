import React, { Children, cloneElement } from 'react';

import styles from './styles.module.css';

type TabsHeaderProps = {
  children: React.ReactElement | React.ReactElement[];
  activeTab?: number;
  setActiveTab?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
};

const TabsHeader: React.FC<TabsHeaderProps> = ({
  children,
  activeTab,
  setActiveTab,
  className,
  style,
}) => {
  return (
    <div
      className={`${styles.tabs_header} ${className ? className : ''}`}
      style={{ ...style }}
    >
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
