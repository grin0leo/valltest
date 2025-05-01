'use client';

import { useState, useEffect } from "react";
import css from './resultPage.module.css'
import axios from 'axios';

interface Result {
    score: number;
    total: number;
}

export function ResultPage() {

    const [result, setResult] = useState<Result | null>(null);

    const getResult = async (id: string) => {
        try {
            const response = await axios.get(`http://103.88.242.151:7777/api/user-answers/${id}`, {
                withCredentials: false, // Важно! Отправляем куки
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении ответов пользователя:', error);
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getResult('1');
                console.log(result);
                setResult(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);


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
