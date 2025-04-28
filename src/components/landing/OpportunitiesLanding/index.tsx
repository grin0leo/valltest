"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';
import styles from './opportunitiesLanding.module.css';

export function OpportunitiesLanding() {
    const router = useRouter();

    const handleClickTestHand = () => {
        const isAuthenticated = !!localStorage.getItem("token");

        if (isAuthenticated) {
            router.push("/create_test_alone");
        } else {
            localStorage.setItem("redirectAfterLogin", "/create_test_alone");
            router.push("/main/auth/signup");
        }
    };

    const handleClickTestAI = () => {
        const isAuthenticated = !!localStorage.getItem("token");

        if (isAuthenticated) {
            router.push("/catalog/create_test_ai");
        } else {
            localStorage.setItem("redirectAfterLogin", "/catalog/create_test_ai");
            router.push("/main/auth/signup");
        }
    };

    const handleClickCatalog = () => {
        const isAuthenticated = !!localStorage.getItem("token");

        if (isAuthenticated) {
            router.push("/catalog");
        } else {
            localStorage.setItem("redirectAfterLogin", "/catalog");
            router.push("/main/auth/signup");
        }
    };

    return (
        <div className={styles.container}>
            <p id='opportunities' className={`${styles.scrollAnchor} scroll-mt-[80px]`}>Возможности</p>
            <p className={styles.title}>Сервис для прокачки знаний</p>
            <div className={styles.buttonsContainer}>

                <button onClick={handleClickTestHand} className={`${styles.button} ${styles.greenButton}`}>
                        <div className={styles.buttonHeader}>
                            <Image src="landing/CreateTest.svg" width={48} height={48} alt="GenAI"/>
                            <p className={`${styles.buttonTitle} ${styles.blackText}`}>Создавайте тесты</p>
                        </div>

                        <div className={styles.buttonContent}>
                            <div className={`${styles.buttonDescription} ${styles.blackText}`}>
                                Добавляйте вопросы, меняйте их и быстро настраивайте с помощью инструментов конструктора
                            </div>
                            <div className={`${styles.buttonAction} ${styles.blackAction}`}>
                                Создать&nbsp;&nbsp;&nbsp;&gt;
                            </div>
                        </div>
                </button>


                <button onClick={handleClickTestAI} className={styles.button}>
                    <div className={styles.buttonHeader}>
                        <Image src="landing/GenAI.svg" width={48} height={48} alt="GenAI"/>
                        <p className={styles.buttonTitle}>Генерация ИИ</p>
                    </div>

                    <div className={styles.buttonContent}>
                        <div className={styles.buttonDescription}>
                            Искуственный интелект создает тест за Вас на любую выбранную тему
                        </div>
                        <div className={styles.buttonAction}>
                            Сгенерировать&nbsp;&nbsp;&nbsp;&gt;
                        </div>
                    </div>
                </button>

                <button onClick={handleClickCatalog} className={styles.button}>
                    <div className={styles.buttonHeader}>
                        <Image src="landing/LibTest.svg" width={48} height={48} alt="GenAI"/>
                        <p className={styles.buttonTitle}>Библиотека тестов</p>
                    </div>

                    <div className={styles.buttonContent}>
                        <div className={styles.buttonDescription}>
                            Сейчас функция находится в разработке <br />
                            Надеемся, что Вы останетесь с нами!
                        </div>
                        <div className={styles.buttonAction}>
                            Дорожная карта&nbsp;&nbsp;&nbsp;&gt;
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}