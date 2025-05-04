"use client";

import Image from 'next/image';
import css from './whyValltestMain.module.css';

export function WhyVallTestMain() {
    return (
        <div className={css.container}>
            <p id='opportunities' className={`${css.scrollAnchor} scroll-mt-[80px]`}>Почему Valltest</p>
            <p className={css.title}>Главное, за что нас ценят</p>
            <div className={css.cardsContainer}>
                <div className={css.card}>
                    <div className={css.cardHeader}>
                        <Image src="/main/Convenience.svg" width={48} height={48} alt="Удобство"/>
                        <p className={css.cardTitle}>Удобство для учеников</p>
                    </div>
                    <div className={css.cardContent}>
                        <div className={css.cardDescription}>
                            Готовьтесь к экзаменам быстрее: решайте похожие задания, проходите тесты и отслеживайте прогресс. Всё в одном месте.
                        </div>
                    </div>
                </div>

                <div className={css.card}>
                    <div className={css.cardHeader}>
                        <Image src="/main/Help.svg" width={48} height={48} alt="Помощь"/>
                        <p className={css.cardTitle}>Помощь преподавателям</p>
                    </div>
                    <div className={css.cardContent}>
                        <div className={css.cardDescription}>
                            Создание и проверка тестов — автоматизировано. Используйте готовые шаблоны или создавайте с нуля за пару минут.
                        </div>
                    </div>
                </div>

                <div className={css.card}>
                    <div className={css.cardHeader}>
                        <Image src="/main/ModernApproach.svg" width={48} height={48} alt="Подход"/>
                        <p className={css.cardTitle}>Современный подход</p>
                    </div>
                    <div className={css.cardContent}>
                        <div className={css.cardDescription}>
                            Мы внедряем ИИ и современные технологии, чтобы упростить обучение и освободить время для жизни, а не рутинной работы.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}