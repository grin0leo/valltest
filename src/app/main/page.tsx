import styles from "./mainPage.module.css";
import { StartMain } from "@/components/main/StartMain";
import { CarouselMain } from "@/components//main/CarouselMain"
import { WhyVallTestMain } from "@/components/main/WhyVallTestMain";
import { RoadmapMain } from "@/components/main/RoadmapMain";
import { ContactsMain } from "@/components/main/ContactsMain";


export default function MainContainers() {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.heading}>Главная</h1>
        <div className={styles.content}>
          <StartMain />
          <CarouselMain />
          <WhyVallTestMain />
          <RoadmapMain />
          <ContactsMain />
        </div>
      </div>
    </main>
  );
}