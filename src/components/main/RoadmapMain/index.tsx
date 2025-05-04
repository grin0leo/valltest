import Image from "next/image"
import css from "./roadmapMain.module.css"

export function RoadmapMain() {
    return (
        <div className={css.container}>
            <p id="roadmap" className={css.roadmapTitle}>Дорожная карта</p>
            <p className={css.planTitle}>Загляни в будущее VallTest</p>

            <div className={css.imageContainer}>
                <Image src="/main/Roadmap.svg" width={0} height={0} sizes="80%" alt="Roadmap" className={css.roadmapImage}/>

                <Image src="/main/Roadmap2.svg" width={0} height={0} sizes="100%" alt="Roadmap mobile" className={css.roadmapImageMobile}/>
            </div>
        </div>
    )
}