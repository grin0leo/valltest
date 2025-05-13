'use client'

import { TestCard } from '@/shared/ui/TestCard'
import css from './workshop.module.css'
import { TestsBlock } from '@/components/workshop/TestsBlock'
import { CreateTestButton } from '@/shared/ui/CreateTestButton'
import { TestPopupWrapper } from '@/shared/ui/TestPopupWrapper'

export default function Workshop() {




    return (

        <main className={css.page}>

            <header className={css.titleBlock}>
                <h1 className={css.title}>Мастерская</h1>

                <div className={css.createTest}>
                    <TestPopupWrapper text='Создать тест' />
                </div>

            </header>

            <TestsBlock userId={''} />


            {/* <section>
                <TestCard testName='Русский 10 класс ТЕСТ' questions={10} testId={1} />
            </section> */}


        </main>
    )


}