'use client';

import { useState } from 'react';
import clsx from 'clsx';
import css from './problem.module.css';

interface Answer {
    id: number;
    value: string;
}

interface Props {
    questionNumber: number;
    questionText: string;
    answers: Answer[];
    selectedAnswerId: number | null;
    onSelectAnswer: (answerId: number) => void;
}

export function Problem({
    questionNumber,
    questionText,
    answers,
    selectedAnswerId,
    onSelectAnswer, }: Props) {
    // Состояние для хранения выбранного ответа
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const handleAnswerClick = (id: number) => {
        setSelectedAnswer(id);       // локальное состояние (можно вообще убрать)
        onSelectAnswer(id);          // сообщаем наверх о выборе
    };

    return (
        <section className={css.problem_content}>
            <h2 className={css.problem_title}>Задание №{questionNumber}</h2>
            <p className={css.problem_question}>{questionText}</p>
            <div className={css.problem_answers}>
                {answers.map((answer, idx) => {
                    // Расчёт цвета кнопки
                    const colorClass = css[`color${(idx % 4) + 1}`];
                    return (
                        <div className={css.position}>
                            <button
                                key={answer.id}
                                onClick={() => handleAnswerClick(answer.id)}
                                className={clsx(
                                    css.problem_answer, // Основной стиль кнопки
                                    colorClass,           // Цветовая модификация
                                    selectedAnswer === answer.id && css.selected // Если ответ выбран, добавляем класс selected
                                )}
                                aria-label={`Вариант ${answer.id}`}
                            >
                                {answer.value}
                            </button>
                            <div className={css.problem_answer_id}>
                                {answer.id}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
