import React, { Children, cloneElement, useState } from 'react';

import { TabsHeader } from './TabsHeader';
import { TabContent } from './TabContent';

import styles from './styles.module.css';

type TabsProps = {
  children: React.ReactElement[];
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabs}>
      {Children.map(children, (child: React.ReactElement) => {
        if (child.type === TabsHeader) {
          return cloneElement(child, {
            activeTab,
            setActiveTab,
          });
        }

        return null;
      })}

      {Children.map(
        children.filter((child) => child.type !== TabsHeader),
        (content: React.ReactElement, index) => {
          if (index === activeTab) {
            return content;
          }

          return null;
        }
      )}
    </div>
  );
};

export { Tabs, TabsHeader, TabContent };
export { Tab } from './Tab';
