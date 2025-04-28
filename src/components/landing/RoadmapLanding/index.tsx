import Image from "next/image"
import styles from "./roadmapLanding.module.css"

export function RoadmapLanding() {
    return (
        <div className={styles.container}>
            <p id="roadmap" className={styles.roadmapTitle}>Дорожная карта</p>
            <p className={styles.planTitle}>Наш стратегический план</p>

            <div className={styles.imageContainer}>
                <Image src="/landing/Roadmap.svg" width={0} height={0} sizes="80%" alt="Roadmap" className={styles.roadmapImage}/>

                <Image src="/landing/Roadmap2.svg" width={0} height={0} sizes="100%" alt="Roadmap mobile" className={styles.roadmapImageMobile}/>
            </div>
        </div>
    )
}