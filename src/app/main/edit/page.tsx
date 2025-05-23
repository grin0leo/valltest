"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TaskForm } from "@/components/edit/task_form/task_form";
import { AddTaskButton } from "@/components/edit/add_task_button/add_task_button";
import { TestName } from "@/components/edit/test_name/test_name";
import { ActionButtonsGroup } from "@/components/edit/actionButtonsGroup/actionButtonsGroup";
import styles from "./edit.module.css";
import { LocalStorageDraftTest, useRequests } from "@/shared/api/req";
import { Loader } from "@/shared/ui/Loader";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";

interface Task {
  question: string;
  answers: { value: string; is_correct: boolean }[];
}

const CreateTestPage = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [testName, setTestName] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const [testId, setTestId] = useState("");

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("testDraft");
    if (!raw) return;

    try {
      const parsed: LocalStorageDraftTest = JSON.parse(raw);
      setTestName(parsed.testName ?? "");
      setTopic(parsed.topic ?? "");
      setDifficulty(parsed.difficulty ?? "");
      setTasks(
        parsed.problems.map((q) => ({
          question: q.problem,
          answers: q.answers.map((a) => ({
            value: a.answer,
            is_correct: a.isCorrect,
          })),
        }))
      );
    } catch (err) {
      console.error("Ошибка при загрузке черновика:", err);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  if (!isInitialized) return <Loader />;

  const { submitDraftTest } = useRequests();

  // ИСПРАВИТЬ
  const handleShareTest = () => {
    console.log("SHARE");
  };
  const getDraftTestFromState = (): LocalStorageDraftTest => {
    return {
      testName,
      topic,
      difficulty,
      problems: tasks.map((task) => ({
        problem: task.question,
        answers: task.answers.map((ans) => ({
          answer: ans.value,
          isCorrect: ans.is_correct,
        })),
      })),
    };
  };

  const handleSaveToWorkshop = async () => {
    try {
      setIsPending(true);
      const draft = getDraftTestFromState();
      localStorage.setItem("testDraft", JSON.stringify(draft));

      const testId = await submitDraftTest();
      console.log("Тест сохранен в мастерскую, ID:", testId);
      setTestId(testId);
      setIsSaved(true);
    } catch (err) {
      console.error("Ошибка при сохранении теста:", err);
      setError("Не удалось сохранить тест");
      setIsSaved(false);
    } finally {
      setIsPending(false);
    }
  };

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        question: "",
        answers: [
          { value: "", is_correct: false },
          { value: "", is_correct: false },
        ],
      },
    ]);
  };

  const handleRemoveTask = (taskNumber: number) => {
    setTasks(tasks.filter((_, index) => index !== taskNumber - 1));
  };

  const handleQuestionChange = (index: number, question: string) => {
    const newTasks = [...tasks];
    newTasks[index].question = question;
    setTasks(newTasks);
  };

  const handleAnswersChange = (
    index: number,
    answers: { value: string; is_correct: boolean }[]
  ) => {
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

      {error && <ErrorMessage isActive={true} message={error} />}
      <ActionButtonsGroup
        shareHref="/share-link"
        testId={testId}
        isSaved={isSaved}
        onSave={handleSaveToWorkshop}
      />
    </div>
  );
};

export default CreateTestPage;
