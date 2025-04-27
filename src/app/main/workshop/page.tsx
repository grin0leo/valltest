import { TestCard } from '@/shared/ui/TestCard'
import css from './workshop.module.css'
import Link from 'next/link'
import { TestsBlock } from '@/components/workshop/TestsBlock'

export default function Workshop() {




    return (

        <main className={css.page}>

            <header className={css.titleBlock}>
                <h1 className={css.title}>Мастерская</h1>

                {/* ПЕРЕИСПОЛЬЗОВАТЬ !!! и добавить кнопку открытия формы */}
                <button>
                    Создать тест
                </button>

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