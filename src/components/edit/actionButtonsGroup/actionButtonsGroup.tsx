"use client";

import { useState } from "react";
import styles from "./actionButtonsGroup.module.css";
import Image from "next/image";

interface ActionButtonsGroupProps {
  shareHref: string;
  testId: string;
  onSave: () => void;
  isSaved: boolean;
}
import { useRouter } from "next/navigation";

export const ActionButtonsGroup = ({
  shareHref,
  testId,
  onSave,
  isSaved,
}: ActionButtonsGroupProps) => {
  const router = useRouter();
  const [showSaveTooltip, setShowSaveTooltip] = useState(false);
  const [showTestTooltip, setShowTestTooltip] = useState(false);

  const handleTakeTestClick = () => {
    if (!isSaved) return;
    router.push(`/main/solve_test/${testId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => {
            if (!isSaved) return;
            const shareUrl = `${window.location.origin}/main/solve_test/${testId}`;
            navigator.clipboard.writeText(shareUrl);
            alert("Ссылка скопирована в буфер обмена");
          }}
          className={`${styles.button} ${styles.shareButton}`}
          disabled={!isSaved}
          onMouseEnter={() => !isSaved && setShowTestTooltip(true)}
          onMouseLeave={() => setShowTestTooltip(false)}
        >
          <Image
            src="/edit/sharebutton.svg"
            alt="Share Icon"
            width={20}
            height={20}
            className={styles.icon}
          />
          Поделиться
        </button>
        {showTestTooltip && !isSaved && (
          <div className={styles.tooltip}>Сначала сохраните тест</div>
        )}
      </div>

      <div className={styles.buttonWrapper}>
        <button
          onClick={() => {
            onSave();
            setShowSaveTooltip(true);
            setTimeout(() => setShowSaveTooltip(false), 3000);
          }}
          className={`${styles.button} ${isSaved ? styles.savedButton : ""}`}
          style={
            isSaved ? { backgroundColor: "transparent", color: "white" } : {}
          }
        >
          Сохранить в мастерскую
        </button>
        {showSaveTooltip && isSaved && (
          <div className={styles.saveTooltip}>Успешно сохранено</div>
        )}
      </div>

      <div className={styles.buttonWrapper}>
        <button
          onClick={handleTakeTestClick}
          className={`${styles.button} ${styles.takeTestButton}`}
          onMouseEnter={() => !isSaved && setShowTestTooltip(true)}
          onMouseLeave={() => setShowTestTooltip(false)}
          disabled={!isSaved}
        >
          Пройти тест
        </button>
        {showTestTooltip && !isSaved && (
          <div className={styles.tooltip}>
            Перед тем, как пройти тест, необходимо его сохранить
          </div>
        )}
      </div>
    </div>
  );
};
