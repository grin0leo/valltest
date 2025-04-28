import Image from "next/image";
import styles from "./aboutUsLanding.module.css";

export function AboutUsLanding() {
    return (
        <div className={styles.container}>
            <p id="aboutUs" className={styles.aboutUsTitle}>О нас</p>
            <p className={styles.mainTitle}>Узнайте больше сейчас</p>

            <div className={styles.imageContainer}>
                <Image src="/landing/AboutUs.svg" width={0} height={0} sizes="100%" alt="About us" className={styles.aboutUsImage}/>

                <Image src="/landing/AboutUs2.svg" width={0} height={0} sizes="100%" alt="About us" className={styles.aboutUsImageMobile}/>
            </div>
        </div>
    )
}