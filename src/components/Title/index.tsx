import React from 'react';

import styles from './styles.module.css';

type TitleProps = {
  children: string;
  className?: string;
  style?: React.CSSProperties;
};

const Title: React.FC<TitleProps> = ({ children, className, style }) => {
  return (
    <h2 className={`${styles.title} ${className}`} style={{ ...style }}>
      {children}
    </h2>
  );
};

export default Title;
