import Image from "next/image"
import Link from "next/link"
import styles from "./footerLanding.module.css"

export function FooterLanding() {
    return (
        <footer className={styles.footer}>
            <hr className={styles.divider} />

            <div className={styles.content}>
                <Image src="/landing/sampleLogo.svg" width={144} height={35} alt="Логотип компании" />

                <nav className={styles.navLinks}>
                    <Link href="#opportunities" className={styles.navLink}>Возможности</Link>
                    <Link href="#aboutUs" className={styles.navLink}>О нас</Link>
                    <Link href="#roadmap" className={styles.navLink}>Дорожная карта</Link>
                    <Link href="#contacts" className={styles.navLink}>Контакты</Link>
                </nav>
            </div>
        </footer>
    )
}