'use client';

import { useState, useEffect } from "react";
import css from './resultPage.module.css'
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

interface Result {
    score: number;
    total: number;
}
export function ResultPage() {

    const [result, setResult] = useState<Result | null>(null);
    const [error, setError] = useState<boolean>(false)



    useEffect(() => {
        const raw = localStorage.getItem('testResult');
        if (raw) {
            try {
                const parsed: Result = JSON.parse(raw);
                setResult(parsed);
            } catch (e) {
                console.error('Ошибка при разборе результата из localStorage', e);
                setError(true)
            }
        } else {
            console.warn('Результат не найден в localStorage');
        }
    }, []);

    if (error) {
        return <ErrorMessage message="Ошибка при разборе результата" isActive={true} />
    }
    if (!result) {
        return <Loader />;
    }


    return (
        <main className={css.container}>
            <section className={css.content}>
                <h1 className={css.title}>Поздравляем, тест завершен!</h1>
                <p className={css.text}>Решено правильно <br /><span className={css.score}>{result?.score} из {result?.total}</span> вопросов</p>
                <nav className={css.buttons}>
                    <a className={css.button_black} href="">Пройти еще раз</a>
                    <a className={css.button_green} href="">На главную</a>
                </nav>
            </section>
        </main>
    );
}


// const getResult = async (id: string) => {
//     try {
//         const response = await axios.get(`/api/user-answers/${id}`, {
//             withCredentials: false, // Важно! Отправляем куки
//         });
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Ошибка при получении ответов пользователя:', error);
//     }
// };

// useEffect(() => {
//     async function fetchData() {
//         try {
//             const result = await getResult('1');
//             console.log(result);
//             setResult(result);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     fetchData();
// }, []);