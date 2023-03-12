import React, { useEffect } from 'react';

import styles from './styles.module.css';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
};

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  style,
  isOpen,
  onClose,
}) => {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <div
        className={`${styles.content} ${className ? className : ''}`}
        style={{ ...style }}
      >
        {children}
      </div>
      <div className={styles.overlay} onClick={onClose} />
    </div>
  );
};

export default Modal;
