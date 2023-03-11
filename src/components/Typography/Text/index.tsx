import React from 'react';

import styles from './styles.module.css';

type TextProps = {
  children: string;
  className?: string;
  style?: React.CSSProperties;
};

const Text: React.FC<TextProps> = ({ children, className, style }) => {
  return (
    <p className={`${styles.text} ${className}`} style={{ ...style }}>
      {children}
    </p>
  );
};

export { Text };
