import React from 'react';

import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: 'submit' | 'delete';
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  style,
  type,
}) => {
  return (
    <button
      className={`${styles.button} ${type ? styles[type] : styles.submit} ${
        className ? className : ''
      }`}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
