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
  question: string;
  answers: AnswerSolve[];
}

interface TestData {
  testName: string;
  problems: Problem[];
}
export default function SolveTestPage() {
  const { testId } = useParams<{ testId: string }>();
  const { getTestById, postUserAnswers } = useRequests();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [testData, setTestData] = useState<TestData | null>(null);
  const [userAnswers, setUserAnswers] = useState<{
    [index: number]: number | null;
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

  const handleAnswerSelect = (index: number, answerId: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [index]: answerId,
    }));
  };

  const allAnswered = testData?.problems?.every(
    (_, index) =>
      userAnswers[index] !== undefined && userAnswers[index] !== null
  );

  const handleSubmit = async () => {
    try {
      const answersArray = Object.values(userAnswers)
        .filter((answerId): answerId is number => answerId !== null)
        .map((answerId) => ({ answerId }));

      const data = await postUserAnswers(testId, answersArray);
      router.push("/main/result");
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
              selectedAnswerId={userAnswers[index] ?? null}
              onSelectAnswer={(answerId) => handleAnswerSelect(index, answerId)}
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
