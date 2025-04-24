'use client'

import clsx from 'clsx'
import css from './aside.module.css'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'


export function LeftAside() {

    const pathName = usePathname()

    const links = [
        {
            imgSrc: '/Layout/home.svg',
            link: '/main'
        },
        {
            imgSrc: '/Layout/workshop.svg',
            link: '/main/workshop'
        }
    ]
    // TODO добавить Hover эффект 
    return (

        <aside className={css.aside}>

            <Link href={'/main'}>
                <Image src={'/Layout/Vt.svg'} width="39" height="24" alt="Лого" />
            </Link>

            {/* написать скрипт для появления popUp окна */}
            <button className={css.button} aria-label="Создать тест">
                <Image src={"/Layout/cross.svg"} width={16} height={16} alt="Иконка Создать тест" />
            </button>

            <nav className={css.list}>
                {links.map((el, i) => (
                    <Link href={el.link} key={i} >
                        <button className={clsx(css.link)}>
                            {pathName === el.link ?
                                <Image src={el.imgSrc.replace('.svg', 'Active.svg')} width={21} height={21} alt={`Иконка`} />
                                :
                                <Image src={el.imgSrc} width={21} height={21} alt={`Иконка`} />
                            }
                        </button>
                    </Link>
                ))}
            </nav>

        </aside >
    )
}