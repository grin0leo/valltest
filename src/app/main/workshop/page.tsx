'use client'

import { TestCard } from '@/shared/ui/TestCard'
import css from './workshop.module.css'
import { TestsBlock } from '@/components/workshop/TestsBlock'
import { CreateTestButton } from '@/shared/ui/CreateTestButton'

export default function Workshop() {




    return (

        <main className={css.page}>

            <header className={css.titleBlock}>
                <h1 className={css.title}>Мастерская</h1>

                {/* ПЕРЕИСПОЛЬЗОВАТЬ !!! и добавить кнопку открытия формы */}
                <CreateTestButton onClick={() => 1} text='Создать тест' />

            </header>

            <TestsBlock userId={1} />

            {/* УДАЛИТЬ ЭТО ПРИМЕР */}
            <section>
                {/* ВИЗУАЛЬНЫЙ ПРИМЕР */}
                <TestCard testName='Русский 10 класс ТЕСТ' questions={10} testId={1} />
            </section>


        </main>
    )


}