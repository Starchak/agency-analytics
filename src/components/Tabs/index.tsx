import React, { Children, cloneElement, useState } from 'react';

import { TabsHeader } from './TabsHeader';
import { TabContent } from './TabContent';

import styles from './styles.module.css';

type TabsProps = {
  children: React.ReactElement[];
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  console.log('activeTab', activeTab);

  return (
    <div className={styles.tabs}>
      {Children.map(children, (child: React.ReactElement, index) => {
        if (child.type == TabsHeader) {
          return cloneElement(child, {
            activeTab,
            setActiveTab,
          });
        } else {
          return null;
        }
      })}
    </div>
  );
};

export { Tabs, TabsHeader, TabContent };
export { Tab } from './Tab';
