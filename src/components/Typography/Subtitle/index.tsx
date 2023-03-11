import React from 'react';

import styles from './styles.module.css';

type SubtitleProps = {
  children: string;
  className?: string;
  style?: React.CSSProperties;
};

const Subtitle: React.FC<SubtitleProps> = ({ children, className, style }) => {
  return (
    <p className={`${styles.subtitle} ${className}`} style={{ ...style }}>
      {children}
    </p>
  );
};

export { Subtitle };
