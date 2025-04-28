import Image from "next/image"
import Link from "next/link"
import styles from "./contactsLanding.module.css"

export function ContactsLanding() {
    return (
        <div className={styles.container}>
            <p id="contacts" className={styles.contactsTitle}>Контакты</p>
            <p className={styles.stayInTouch}>Оставайтесь на связи</p>
            <div className={styles.linksContainer}>
                <Link href="https://t.me/+jQ8lQeJQaBg2MWYy" target="_blank" className={styles.telegramLink}>
                    <p className={styles.linkText}>ЧАТ С НАМИ В TELEGRAM</p>
                    <Image src="/landing/Tg.svg" alt="Telegram icon" width={52} height={47}/>
                </Link>
            </div>
        </div>
    )
}