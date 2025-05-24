// 'use client';

// import { useState } from 'react';
// import clsx from 'clsx';
// import css from './problem.module.css';

// interface Answer {
//     id: number;
//     value: string;
// }

// interface Props {
//     questionNumber: number;
//     questionText: string;
//     answers: Answer[];
//     selectedAnswerId: number | null;
//     onSelectAnswer: (answerId: number) => void;
// }

// export function Problem({
//     questionNumber,
//     questionText,
//     answers,
//     selectedAnswerId,
//     onSelectAnswer, }: Props) {
//     // Состояние для хранения выбранного ответа
//     const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

//     const handleAnswerClick = (id: number) => {
//         setSelectedAnswer(id);       // локальное состояние (можно вообще убрать)
//         onSelectAnswer(id);          // сообщаем наверх о выборе
//     };

//     return (
//         <section className={css.problem_content}>
//             <h2 className={css.problem_title}>Задание №{questionNumber}</h2>
//             <p className={css.problem_question}>{questionText}</p>
//             <div className={css.problem_answers}>
//                 {answers.map((answer, idx) => {
//                     // Расчёт цвета кнопки
//                     const colorClass = css[`color${(idx % 4) + 1}`];
//                     return (
//                         <div key={idx} className={css.position}>
//                             <button
//                                 onClick={() => handleAnswerClick(answer.id)}
//                                 className={clsx(
//                                     css.problem_answer, // Основной стиль кнопки
//                                     colorClass,           // Цветовая модификация
//                                     selectedAnswer === answer.id && css.selected // Если ответ выбран, добавляем класс selected
//                                 )}
//                                 aria-label={`Вариант ${answer.id}`}
//                             >
//                                 {answer.value}
//                             </button>
//                             <div className={css.problem_answer_id}>
//                                 {answer.id}
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }
"use client";

import clsx from "clsx";
import css from "./problem.module.css";

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
  onSelectAnswer,
}: Props) {
  return (
    <section className={css.problem_content}>
      <h2 className={css.problem_title}>Задание №{questionNumber}</h2>
      <p className={css.problem_question}>{questionText}</p>
      <div className={css.problem_answers}>
        {answers.map((answer, idx) => {
          const colorClass = css[`color${(idx % 4) + 1}`];
          const isSelected = selectedAnswerId === answer.id;

          return (
            <div key={answer.id} className={css.position}>
              <button
                onClick={() => onSelectAnswer(answer.id)}
                className={clsx(
                  css.problem_answer,
                  colorClass,
                  isSelected && css.selected
                )}
                aria-label={`Вариант ${idx + 1}`}
              >
                {answer.value}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
