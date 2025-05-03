'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { TaskForm } from '@/components/edit/task_form/task_form';
import { AddTaskButton } from '@/components/edit/add_task_button/add_task_button';
import { TestName } from '@/components/edit/test_name/test_name';
import { ActionButtonsGroup } from '@/components/edit/actionButtonsGroup/actionButtonsGroup';
import styles from './edit.module.css';
import { LocalStorageDraftTest } from '@/shared/api/req';
interface Task {
  question: string;
  answers: { value: string; is_correct: boolean }[];
}


const CreateTestPage = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [testName, setTestName] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  //ПОДТЯГИВАЮ информацию о тесте из LocalStorage
  useEffect(() => {
    const raw = localStorage.getItem('draftTest');
    if (!raw) return;

    try {
      const parsed: LocalStorageDraftTest = JSON.parse(raw);

      setTestName(parsed.testName ?? '');
      setTopic(parsed.topic ?? '');
      setDifficulty(parsed.difficulty ?? 'medium');

      setTasks(
        parsed.questions.map((q) => ({
          question: q.question,
          answers: q.answers.map((a) => ({
            value: a.answer,
            is_correct: a.isCorrect,
          })),
        }))
      );
    } catch (err) {
      console.error('Ошибка при загрузке черновика:', err);
    }
  }, []);

  const isTestProblemsValid = tasks.every(task =>
    task.question.trim() !== '' &&
    task.answers.length >= 2 &&
    task.answers.some(answer => answer.is_correct) &&
    task.answers.every(answer => answer.value.trim() !== '')
  );


  const handleShareTest = () => {
    console.log('Тест поделен');
  };

  const handleSaveToWorkshop = () => {
    console.log('Тест сохранен в мастерскую');
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleTakeTest = () => {
    if (isSaved) {
      console.log('Тест начат');
    } else {
      console.log('Тест не сохранен');
    }
  };

  const handleCreateTest = async () => {
    if (!isTestProblemsValid) {
      setError('Проверьте правильность заполнения всех заданий');
      return;
    }

    setIsPending(true);
    setError('');

    try {
      const response = await new Promise<{ success: boolean; testId?: string }>((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            testId: `test-${Math.random().toString(36).substring(2, 9)}`
          });
        }, 1000);
      });

      if (response.success && response.testId) {
        router.push(`/catalog/preview/ai_test/${response.testId}`);
      }
    } catch (err) {
      setError('Произошла ошибка при создании теста');
    } finally {
      setIsPending(false);
    }
  };

  const handleAddTask = () => {
    setTasks([...tasks, {
      question: '',
      answers: [
        { value: '', is_correct: false },
        { value: '', is_correct: false }
      ]
    }]);
  };

  const handleRemoveTask = (taskNumber: number) => {
    setTasks(tasks.filter((_, index) => index !== taskNumber - 1));
  };

  const handleQuestionChange = (index: number, question: string) => {
    const newTasks = [...tasks];
    newTasks[index].question = question;
    setTasks(newTasks);
  };

  const handleAnswersChange = (index: number, answers: { value: string; is_correct: boolean }[]) => {
    const newTasks = [...tasks];
    newTasks[index].answers = answers;
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <TestName
        name={testName}
        onNameChange={setTestName}
        difficulty={difficulty}
        questionsCount={tasks.length}
        tag1="Математика"
        tag2="Дроби"
      />

      {tasks.map((task, index) => (
        <TaskForm
          key={index}
          taskNumber={index + 1}
          question={task.question}
          answers={task.answers}
          onQuestionChange={(question) => handleQuestionChange(index, question)}
          onAnswersChange={(answers) => handleAnswersChange(index, answers)}
          onRemove={handleRemoveTask}
        />
      ))}

      <div className={styles.addButtonContainer}>
        <AddTaskButton onClick={handleAddTask} />
      </div>

      {error && (
        <div className={styles.validationError}>
          <p>{error}</p>
        </div>
      )}

      <ActionButtonsGroup
        shareHref="/share-link"
        takeTestHref="/test-link"
        onSave={handleSaveToWorkshop}
        isSaved={isSaved}
      />

    </div>
  );
};

export default CreateTestPage;