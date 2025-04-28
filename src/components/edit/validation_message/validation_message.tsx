import React from 'react';
import styles from './validation_message.module.css';

interface ValidationMessageProps {
  message: string;
}

export const ValidationMessage: React.FC<ValidationMessageProps> = ({ message }) => {
  return (
    <div className={styles.validationContainer}>
      <p>{message}</p>
    </div>
  );
};