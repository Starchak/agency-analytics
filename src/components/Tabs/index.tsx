import React, { Children, cloneElement, useState } from 'react';

import { TabsHeader } from './TabsHeader';
import { TabContent } from './TabContent';

import styles from './styles.module.css';

type TabsProps = {
  children: React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  defaultTab?: number;
};

const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  style,
  defaultTab,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);
  let _header: React.ReactElement | null = null,
    _content: React.ReactElement[] = [];

  Children.map(children, (child: React.ReactElement) => {
    if (child.type === TabsHeader) {
      _header = child;
    } else if (child.type === TabContent) {
      _content.push(child);
    }
  });

  return (
    <div
      className={`${styles.tabs} ${className ? className : ''}`}
      style={{ ...style }}
    >
      {_header &&
        cloneElement(_header, {
          activeTab,
          setActiveTab,
        })}

      {_content.map((content, index) => {
        if (index === activeTab) {
          return content;
        }
      })}
    </div>
  );
};

export { Tabs, TabsHeader, TabContent };
export { Tab } from './Tab';
