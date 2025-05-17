"use client";

import css from "./solveTestPage.module.css";
import { NumberOfProblems } from "@/components/SolveTestPage/NumberOfProblems";
import { Problem } from "@/components/SolveTestPage/Problem";
import { EndButton } from "@/components/SolveTestPage/EndButton";
import { useEffect, useState } from "react";
import { useRequests } from "@/shared/api/req";
import { useParams, useRouter } from "next/navigation";
import { Loader } from "@/shared/ui/Loader";

interface AnswerSolve {
  id: number;
  value: string;
}

interface Problem {
  id: number;
  question: string;
  answers: AnswerSolve[];
}

interface TestData {
  testName: string;
  problems: Problem[];
}
export default function SolveTestPage() {
  const { testId } = useParams<{ testId: string }>();
  const { getTestById, submitDraftTest } = useRequests();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [testData, setTestData] = useState<TestData | null>(null);
  const [userAnswers, setUserAnswers] = useState<{
    [problemId: number]: number | null;
  }>({});

  const router = useRouter();

  useEffect(() => {
    // if (!testId) return;

    const fetchTest = async () => {
      try {
        setIsPending(true);
        const data = await getTestById(testId);
        if (data.status === 200 && data.data) {
          setTestData(data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsPending(false);
      }
    };

    fetchTest();
  }, []);

  const handleAnswerSelect = (problemId: number, answerId: number) => {
    setUserAnswers((prev) => ({ ...prev, [problemId]: answerId }));
  };

  const allAnswered = testData?.problems?.every(
    (problem) =>
      userAnswers[problem.id] !== undefined && userAnswers[problem.id] !== null
  );

  // ОШИБКА !!! ИСПОЛЬЗУЕТСЯ НЕ ТА ФУНКЦИЯ, НУЖНО ОТПРАВЛЯТЬ РЕЗУЛЬТАТЫ ОТВЕТОВ
  const handleSubmit = async () => {
    try {
      const newTestId = await submitDraftTest();
      console.log("Тест успешно сохранён, ID:", newTestId);
      localStorage.removeItem("testDraft"); // очищаем localStorage
      router.push(`/tests/${newTestId}`);
    } catch (error) {
      console.error("Ошибка при отправке теста:", error);
      alert("Не удалось отправить тест");
    }
  };

  if (isPending || !testData) {
    return <Loader />;
  }

  return (
    <main className={css.container}>
      <article className={css.content}>
        <header className={css.header}>
          <h1 className={css.title}>{testData.testName}</h1>
          <p className={css.text}>Возможно несколько вариантов ответа</p>
          <nav className={css.header_nav}>
            {testData.problems.map((problem, index) => (
              <NumberOfProblems
                key={index}
                number={index + 1}
                isActive={index === 0}
              />
            ))}
          </nav>
        </header>
        <section>
          {testData.problems.map((problem, index) => (
            <Problem
              key={index}
              questionNumber={index + 1}
              questionText={problem.question}
              answers={problem.answers}
              selectedAnswerId={userAnswers[problem.id] ?? null}
              onSelectAnswer={(answerId) =>
                handleAnswerSelect(problem.id, answerId)
              }
            />
          ))}
        </section>
        <footer className={css.footer}>
          <EndButton
            isDisabled={!allAnswered}
            handleSubmit={handleSubmit}
            userAnswers={userAnswers}
            testName={testData.testName}
          />
        </footer>
      </article>
    </main>
  );
}
