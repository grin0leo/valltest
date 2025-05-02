'use client';

import css from './solveTestPage.module.css'
import { NumberOfProblems } from '@/components/SolveTestPage/NumberOfProblems';
import { Problem } from '@/components/SolveTestPage/Problem';
import { EndButton } from '@/components/SolveTestPage/EndButton';
import { useState } from 'react';

const testData = {
    testName: 'Математика',
    problems: [
        {
            id: 1,
            question: 'Сколько будет 2+2?',
            answers: [
                { id: 1, value: '2' },
                { id: 2, value: '3' },
                { id: 3, value: '4' },
                { id: 4, value: 'FISH' },
            ],
        },
        {
            id: 2,
            question: 'сколько миллиметров в отрыжке? округли до малосольных огурчиков',
            answers: [
                { id: 1, value: '34мм' },
                { id: 2, value: '22мм' },
                { id: 3, value: 'чебля' },
                { id: 4, value: '249 рублей' },
            ],
        },
        {
            id: 3,
            question: 'сколько миллиметров в отрыжке? округли до малосольных огурчиковсколько миллиметров в отрыжке? округли до малосольных огурчиковсколько миллиметров в отрыжке? округли до малосольных огурчиковсколько миллиметров в отрыжке? округли до малосольных огурчиковсколько миллиметров в отрыжке? округли до малосольных огурчиков',
            answers: [
                { id: 1, value: 'сколько?' },
                { id: 2, value: 'не мало' },
                { id: 3, value: 'ты мне мозги не еби, я говорю сколько?' },
                { id: 4, value: 'эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... эээээээээээээээээ... ну.... эмммм... типа.... ээээмммм.... ' },
            ],
        },
        {
            id: 4,
            question: '4',
            answers: [
                { id: 1, value: '1' },
                { id: 2, value: '2' },
                { id: 3, value: '2' },
                { id: 4, value: '2' },
                { id: 5, value: '2' },
                { id: 6, value: '2' },
                { id: 7, value: '2' },
                { id: 8, value: '2' },
                { id: 9, value: '2' },
                { id: 10, value: '2' },
                { id: 6, value: '2' },
                { id: 6, value: '2' },
                { id: 6, value: '2' },
                { id: 6, value: '2' },
                { id: 6, value: '2' },
            ],
        },
        {
            id: 5,
            question: '5',
            answers: [
                { id: 1, value: '1' },
                { id: 2, value: '2' },
            ],
        },
        {
            id: 6,
            question: '6',
            answers: [
                { id: 1, value: '1' },
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