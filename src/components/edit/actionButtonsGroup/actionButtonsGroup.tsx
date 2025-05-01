'use client';

import { useState } from 'react';
import styles from './actionButtonsGroup.module.css';
import Image from 'next/image';

interface ActionButtonsGroupProps {
  shareHref: string;
  takeTestHref: string;
  onSave: () => void;
  isSaved: boolean;
}

export const ActionButtonsGroup = ({ 
  shareHref,
  takeTestHref,
  onSave, 
  isSaved 
}: ActionButtonsGroupProps) => {
  const [showSaveTooltip, setShowSaveTooltip] = useState(false);
  const [showTestTooltip, setShowTestTooltip] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <a
          href={shareHref}
          className={`${styles.button} ${styles.shareButton}`}
        >
          <Image 
            src="/edit/sharebutton.svg" 
            alt="Share Icon"
            width={20}
            height={20}
            className={styles.icon}
          />
          Поделиться
        </a>
      </div>

      <div className={styles.buttonWrapper}>
        <button
          onClick={() => {
            onSave();
            setShowSaveTooltip(true);
            setTimeout(() => setShowSaveTooltip(false), 3000);
          }}
          className={`${styles.button} ${isSaved ? styles.savedButton : ''}`}
          style={isSaved ? { backgroundColor: 'transparent', color: 'white' } : {}}
        >
          {isSaved ? 'Сохранить в мастерскую' : 'Сохранить в мастерскую'}
        </button>
        {showSaveTooltip && isSaved && (
          <div className={styles.saveTooltip}>
            Успешно сохранено
          </div>
        )}
      </div>

      <div className={styles.buttonWrapper}>
        <a
          href={isSaved ? takeTestHref : '#'}
          className={`${styles.button} ${styles.takeTestButton}`}
          onMouseEnter={() => !isSaved && setShowTestTooltip(true)}
          onMouseLeave={() => setShowTestTooltip(false)}
          onClick={(e) => !isSaved && e.preventDefault()}
        >
          Пройти тест
        </a>
        {showTestTooltip && !isSaved && (
          <div className={styles.tooltip}>
            Перед тем, как пройти тест, необходимо его сохранить
          </div>
        )}
      </div>
    </div>
  );
};