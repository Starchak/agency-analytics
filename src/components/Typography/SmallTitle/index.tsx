import React from 'react';

import styles from './styles.module.css';

type SmallTitleProps = {
  children: string;
  className?: string;
  style?: React.CSSProperties;
};

const SmallTitle: React.FC<SmallTitleProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <h4 className={`${styles.small_title} ${className}`} style={{ ...style }}>
      {children}
    </h4>
  );
};

export { SmallTitle };
