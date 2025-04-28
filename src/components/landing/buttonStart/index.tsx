"use client";

import { useRouter } from "next/navigation";
import styles from "./buttonStart.module.css";

export function ButtonStart() {
    const router = useRouter();

    const handleClick = () => {
        const isAuthenticated = !!localStorage.getItem("token");

        if (isAuthenticated) {
            router.push("/create_test");
        } else {
            localStorage.setItem("redirectAfterLogin", "/create_test");
            router.push("/auth/signup");
        }
    };

    return (
        <button
            onClick={handleClick}
            className={styles.button}
        >
            Создать тест
        </button>
    );
}