'use client';

import React, { useEffect, useRef } from 'react';
import styles from './answer_input.module.css';

interface AnswerInputProps {
  index: number;
  value: string;
  onChange: (index: number, value: string) => void;
  onToggleCorrect: (index: number) => void;
  isCorrect: boolean;
  onRemove: (index: number) => void;
  backgroundColor: string;
  answersCount: number; 
}

export const AnswerInput: React.FC<AnswerInputProps> = ({
  index,
  value,
  onChange,
  onToggleCorrect,
  isCorrect,
  onRemove,
  backgroundColor,
  answersCount, 
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div 
      className={styles.answerContainer}
      style={{ backgroundColor }}
    >
      {answersCount >= 3 && (
        <button
          type="button"
          onClick={() => onRemove(index)}
          aria-label="Удалить ответ"
          className={styles.removeButton}
        >
          <img 
            src="/edit/cross.svg"  
            alt="Удалить" 
            className={styles.removeIcon} 
          />
        </button>
      )}

      <div
        onClick={() => onToggleCorrect(index)}
        className={`${styles.correctToggle} ${
          isCorrect ? styles.correctToggleActive : ''
        }`}
      >
        <div className={`${styles.correctIndicator} ${
          isCorrect ? styles.correctIndicatorActive : ''
        }`}>
          {isCorrect && (
            <svg 
              className={styles.checkIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="black" 
              strokeWidth="2"
            >
              <path 
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" 
                fill="none" 
              />
            </svg>
          )}
        </div>
      </div>

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
        className={styles.answerTextarea}
        placeholder="Введите вариант ответа"
        rows={1}
      />
    </div>
  );
};