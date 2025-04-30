import Image from 'next/image'
import css from './testCard.module.css'
import clsx from 'clsx';
import Link from 'next/link';

interface TestCardProps {
    testId: number;
    testName: string;
    imgSrc?: string;
    tags?: string[];
    difficulty?: 'Легкий' | 'Средний' | 'Сложный';
    questions: number
}


export function TestCard({
    imgSrc = '/Workshop/test.png',
    testName = 'На сколько вы знаток в математике?',
    tags = ['Маетматика', 'ИИ'],
    difficulty = 'Легкий',
    questions,
    testId
}: TestCardProps) {


    return (

        <article className={css.container}>
            <Image className={css.img} src={imgSrc} width={224} height={179} alt='Картинка Теста' />
            <div className={css.content}>

                <p className={css.title}>{testName}</p>

                {/* MINI-INFO */}
                <div className={css.miniInfo}>

                    <div className={css.detail}>
                        <Image src={'/Workshop/ex.svg'} alt="Иконка" width={16} height={16} />
                        Вопросов: {questions}
                    </div>

                    <div className={css.detail}>
                        <Image src={'/Workshop/difficulty.svg'} alt="Иконка" width={18} height={16} />
                        {difficulty}
                    </div>

                </div>


                {/* TAGS */}
                <ul className={css.tagsList}>
                    {tags.map((el, i) => (
                        <li key={i} className={css.tag}>
                            {el}
                        </li>
                    ))}
                </ul>

                {/* FUNC BUTTON BLOCK  */}
                <section className={css.buttonsList}>
                    <Link href={`/main/solve_test/${testId}`}>
                        <button className={css.button}>
                            Пройти тест
                            <Image className={css.arrow} src={'/Workshop/arrow.svg'} width={14} height={14} alt='Иконка' />
                        </button>
                    </Link>
                    <Link href={`/main/edit/${testId}`}>
                        <button className={css.button}>
                            Редактировать
                            <Image className={css.arrow} src={'/Workshop/arrow.svg'} width={14} height={14} alt='Иконка' />
                        </button>
                    </Link>

                    {/* Добавить функционал копирования в буфер обмена */}
                    <button className={clsx(css.button,)}>
                        <p className={css.share}>
                            Поделиться
                        </p>
                        <Image src={'/Workshop/share.svg'} width={14} height={14} alt='Иконка' />
                    </button>
                </section>

            </div>


        </article>
    )
}