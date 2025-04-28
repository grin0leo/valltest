'use client';

import { AnswerInput } from '@/components/edit/answer_input/answer_input';
import { useState } from 'react';
import styles from './task_form.module.css';

interface TaskFormProps {
  taskNumber: number;
  question: string;
  answers: { value: string; is_correct: boolean }[];
  onQuestionChange: (question: string) => void;
  onAnswersChange: (answers: { value: string; is_correct: boolean }[]) => void;
  onRemove: (taskNumber: number) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  taskNumber,
  question,
  answers,
  onQuestionChange,
  onAnswersChange,
  onRemove,
}) => {
  const ANSWER_COLORS = [
    '#0A589F', 
    '#007C7F', 
    '#E37009', 
    '#E62E69', 
    '#9A4292', 
  ];

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    onRemove(taskNumber);
  };

  const handleRemoveAnswer = (index: number) => {
    const newAnswers = answers.filter((_, i) => i !== index);
    onAnswersChange(newAnswers);
  };

  const handleAddAnswer = () => {
    if (answers.length < 6) {
      onAnswersChange([...answers, { value: '', is_correct: false }]);
    }
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index].value = value;
    onAnswersChange(newAnswers);
  };

  const handleToggleCorrect = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[index].is_correct = !newAnswers[index].is_correct;
    onAnswersChange(newAnswers);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onQuestionChange(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const getAnswerGridClass = () => {
    switch (answers.length) {
      case 1: return styles.gridCols1;
      case 2: return styles.gridCols2;
      case 3: return styles.gridCols3;
      case 4: return styles.gridCols2;
      case 5: return styles.gridCols3;
      case 6: return styles.gridCols3;
      default: return styles.gridCols1;
    }
  };

  return (
    <div className={styles.taskContainer}>
      <button
        type="button"
        onClick={handleRemove}
        aria-label="Удалить задание"
        className={styles.removeTaskButton}
      >
        <img 
          src='/edit/cross.svg' 
          alt='Cross Icon' 
          className={styles.removeTaskIcon} 
        />
      </button>
  
      <h2 className={styles.taskTitle}>Задание №{taskNumber}</h2>
      <textarea
        value={question}
        onChange={handleQuestionChange}
        className={styles.questionInput}
        placeholder="Введите вопрос"
        rows={1}
      />
      
      <div className={styles.answersContainer}>
        <div className={`${styles.answersGrid} ${getAnswerGridClass()}`}>
          {answers.map((answer, index) => (
            <AnswerInput
              key={index}
              index={index}
              value={answer.value}
              onChange={handleAnswerChange}
              onToggleCorrect={handleToggleCorrect}
              isCorrect={answer.is_correct}
              onRemove={handleRemoveAnswer}
              backgroundColor={ANSWER_COLORS[index % ANSWER_COLORS.length]}
              answersCount={answers.length}
            />
          ))}
        </div>
        
        {answers.length < 6 && (
          <button
            type="button"
            onClick={handleAddAnswer}
            className={styles.addAnswerButton}
          >
            <img 
              src="/edit/plus.svg" 
              alt="Plus Icon" 
              className={styles.addIcon} 
            />
          </button>
        )}
      </div>
    </div>
  );
};