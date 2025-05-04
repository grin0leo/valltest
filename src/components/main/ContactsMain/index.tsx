'use client'

import Image from "next/image"
import Link from "next/link"
import css from "./contactsMain.module.css"

export function ContactsMain() {
    return (
        <div className={css.container}>
            <p id="contacts" className={css.contactsTitle}>Контакты</p>
            <p className={css.stayInTouch}>Наши социальные сети</p>
            <div className={css.linksContainer}>
                <Link href="https://t.me/+jQ8lQeJQaBg2MWYy" target="_blank" className={css.telegramLink}>
                    <p className={css.linkText}>ЧАТ С НАМИ В TELEGRAM</p>
                    <Image src="/main/Tg.svg" alt="Telegram icon" width={52} height={47}/>
                </Link>
            </div>
        </div>
    )
}