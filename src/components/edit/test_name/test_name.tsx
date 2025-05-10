'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './test_name.module.css';

interface TestNameProps {
  name: string;
  onNameChange: (value: string) => void;
  difficulty: string;
  questionsCount: number;
  tag1: string;
  tag2: string;
}

export const TestName = ({
  name,
  onNameChange,
  difficulty = "Легкий",
  questionsCount = 6,
  tag1 = "",
  tag2 = "",
}: TestNameProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);

  useEffect(() => {
    setTempName(name);
  }, [name]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleNameBlur = () => {
    if (tempName.trim()) {
      onNameChange(tempName);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNameBlur();
    }
  };

  return (
    <div className={styles.testNameContainer}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          {isEditing ? (
            <input
              value={tempName}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              onKeyDown={handleKeyDown}
              className={styles.titleInput}
              autoFocus
            />
          ) : (
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{name}</h1>
              <button
                onClick={handleEditClick}
                className={styles.editBtn}
                aria-label="Редактировать название"
              >
                <img
                  src="/edit/pencil.svg"
                  alt="Редактировать"
                  className={styles.editIcon}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </button>
            </div>
          )}
        </div>

        <Link href="/some-path" className={styles.saveBtn}>
          Сохранить в мастерскую
        </Link>
      </div>

      <div className={styles.testInfo}>
        <div className={styles.infoItem}>
          <img src="/edit/book.svg" alt="Вопросы" className={styles.infoIcon} />
          <span className={styles.infoText}>Вопросов: {questionsCount}</span>
        </div>
        <div className={styles.infoItem}>
          <img src="/edit/winner.svg" alt="Сложность" className={styles.infoIcon} />
          <span className={styles.infoText}>{difficulty}</span>
        </div>
      </div>

      {(tag1 || tag2) && (
        <div className={styles.tagsContainer}>
          {tag1 && <span className={styles.tag}>{tag1}</span>}
          {tag2 && <span className={styles.tag}>{tag2}</span>}
        </div>
      )}
    </div>
  );
};