'use client'

import { UniversalButton } from "@/components/main/UniversalBotton";
import css from "./startMain.module.css";

export function StartMain() {
    return (
        <div className={css.container}>
            <div className={css.content}>
                {/* Первая строка */}
                <div className={css.firstLine}>
                    <span className={css.highlight}>Создайте</span>
                    <span className={css.title}>тесты так,</span>
                </div>
                
                {/* Вторая строка */}
                <div className={css.secondLine}>
                    <span className={css.highlight}>как удобно</span>
                    <span className={css.title}>именно</span>
                    <span className={css.highlight}>Вам</span>
                </div>
                
                {/* Контейнер для подзаголовков */}
                <div className={css.subtitleContainer}>
                    {/* Подзаголовок - первая строка */}
                    <div className={css.subtitleFirstLine}>
                        Сгенерируйте автоматически или настройте
                    </div>
                    
                    {/* Подзаголовок - вторая строка */}
                    <div className={css.subtitleSecondLine}>
                        каждый вопрос сами — на всё уйдёт пару минут
                    </div>
                </div>
                
                <div className={css.buttonContainer}>
                    <UniversalButton href="/main/create_test">
                        Создать вручную
                    </UniversalButton>
                    <UniversalButton href="/main/create_test_ai">
                        Сгенерировать с ИИ
                    </UniversalButton>
                </div>
            </div>
        </div>
    );
}