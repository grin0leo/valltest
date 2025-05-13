'use client';

import css from './endButton.module.css';
import clsx from 'clsx';

interface Props {
    testName: string;
    userAnswers: { [problemId: number]: number | null };
    isDisabled: boolean;
    handleSubmit: () => void;
}

export function EndButton({ testName, userAnswers, isDisabled, handleSubmit }: Props) {

    return (
        <>
            {isDisabled && (
                <div className={css.notice}>
                    Заполните все ответы, чтобы завершить тест
                </div>
            )}
            <button
                className={clsx(css.button_end, !isDisabled && css.button_end_active)}
                disabled={isDisabled}
                onClick={handleSubmit}
            >
                Завершить тест
            </button>
        </>
    );
}
