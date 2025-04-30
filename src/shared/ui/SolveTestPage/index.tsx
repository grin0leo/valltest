'use client';

import css from './solveTestPage.module.css'
import { NumberOfProblems } from '@/components/SolveTestPage/NumberOfProblems';
import { Problem } from '@/components/SolveTestPage/Problem';
import { EndButton } from '@/components/SolveTestPage/EndButton';
import { useState } from 'react';

const testData = {
    testName: 'Название теста',
    problems: [
        {
            id: 1,
            question: '1',
            answers: [
                { id: 1, value: '1' },
                { id: 2, value: '2' },
                { id: 3, value: '3' },
                { id: 4, value: '4' },
            ],
        },
        {
            id: 2,
            question: '2',
            answers: [
                { id: 1, value: '1' },
                { id: 2, value: '2' },
                { id: 3, value: '3' },
                { id: 4, value: '4' },
            ],
        },
        {
            id: 3,
            question: '3',
            answers: [
                { id: 1, value: '1' },
                { id: 2, value: '2' },
                { id: 3, value: '3' },
                { id: 4, value: '4' },
            ],
        },
        {
            id: 4,
            question: '4',
            answers: [
                { id: 1, value: '1' },
                { id: 2, value: '2' },
                { id: 3, value: '3' },
                { id: 4, value: '4' },
            ],
        },
        {
            id: 5,
            question: '5',
            answers: [
                { id: 1, value: '1' },
                { id: 2, value: '2' },
                { id: 3, value: '3' },
                { id: 4, value: '4' },
            ],
        },
        {
            id: 6,
            question: '6',
            answers: [
                { id: 1, value: '1' },
                { id: 2, value: '2' },
                { id: 3, value: '3' },
                { id: 4, value: '4' },
            ],
        },
    ],
};

export function SolveTestPage() {

    const [userAnswers, setUserAnswers] = useState<{ [problemId: number]: number | null }>({});

    const allAnswered = testData.problems.every(
        (problem) => userAnswers[problem.id] !== undefined && userAnswers[problem.id] !== null
    );

    const handleAnswerSelect = (problemId: number, answerId: number) => {
        setUserAnswers((prev) => ({ ...prev, [problemId]: answerId }));
    };
    const isTestComplete = testData.problems.every(
        (problem) => userAnswers[problem.id] !== undefined && userAnswers[problem.id] !== null
    );


    return (

        <main className={css.container}>
            <article className={css.content}>
                <header className={css.header}>
                    <h1 className={css.title}>{testData.testName}</h1>
                    <p className={css.text}>Возможно несколько вариантов ответа</p>
                    <nav className={css.header_nav}>
                        {testData.problems.map((problem, index) => (
                            <NumberOfProblems
                                key={problem.id}
                                number={index + 1}
                                isActive={index === 0}
                            />
                        ))}
                    </nav>
                </header>
                <section>
                    {testData.problems.map((problem, index) => (
                        <Problem
                            key={problem.id}
                            questionNumber={index + 1}
                            questionText={problem.question}
                            answers={problem.answers}
                            selectedAnswerId={userAnswers[problem.id] ?? null}
                            onSelectAnswer={(answerId) => handleAnswerSelect(problem.id, answerId)}
                        />
                    ))}
                </section>
                <footer className={css.footer}>
                    <EndButton
                        isDisabled={!allAnswered}
                        userAnswers={userAnswers}
                        testName={testData.testName}
                    />
                </footer>
            </article>
        </main>
    );
}