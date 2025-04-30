'use client';

import css from './endButton.module.css';
import clsx from 'clsx';

interface Props {
    testName: string;
    userAnswers: { [problemId: number]: number | null };
    isDisabled: boolean;
}

export function EndButton({ testName, userAnswers, isDisabled }: Props) {
    const handleSubmit = () => {
        const answersToSend = Object.entries(userAnswers).map(([problemId, answerId]) => ({
            problemId: Number(problemId),
            answerId: answerId!,
        }));

        const payload = {
            testName,
            answers: answersToSend,
        };

        console.log('Готово к отправке:', payload);
    };

    return (
        <>
            {isDisabled && (
                <div className={css.notice}>
                    Заполните все ответы, чтобы завершить тест
                </div>
            )}
            <button
                className={clsx(css.button_end, { [css.active]: !isDisabled })}
                disabled={isDisabled}
                onClick={handleSubmit}
            >
                Завершить тест
            </button>
        </>
    );
}
