'use client';

import { RefObject, useRef } from "react";
import css from './popUp.module.css';
import Image from "next/image";
import Link from "next/link";


type PopUpMethodProps = {
    dialogRef: RefObject<HTMLDialogElement>;
    closeDialog: () => void;
};

export function PopUpMethod({ dialogRef, closeDialog }: PopUpMethodProps) {
    return (
        // <div className={css.content}>
        <dialog ref={dialogRef} className={css.dialog}
            onClick={(e) => {
                const dialog = dialogRef.current;
                if (dialog && e.target === dialog) {
                    closeDialog();
                }
            }}>
            <nav className={css.nav}>
                <div className={css.top}>
                    <h1 className={css.title}>Метод создания теста</h1>
                    <button className={css.close} onClick={closeDialog}>
                        <Image src='/2000.svg' alt={"error.image"} width={16} height={16} />
                    </button>
                </div>

                <div className={css.buttonsgap}>
                    <Link href={'/main/create_test'}>
                        <button className={css.choosebuttons} onClick={closeDialog}>
                            <div className={css.buttonstitle}>
                                <Image src="/300.svg" alt={"error.image"} width={40} height={40} />

                                <h2 className={css.h2}>Создание теста самостоятельно</h2>
                            </div>
                            <p className={css.p}>Создавайте тесты самостоятельно с детальной проработкой каждого вопроса, чтобы максимально точно соответствовать вашим требованиям и целям обучения</p>
                        </button>
                    </Link>
                    <Link href={'/main/create_test_ai'}>
                        <button className={css.choosebuttons} onClick={closeDialog}>
                            <div className={css.buttonstitle}>
                                <Image src="/400.svg" alt={"error.image"} width={40} height={40} />

                                <h2 className={css.h2}>Создание теста ИИ</h2>
                            </div>
                            <p className={css.p}>Используйте возможности искусственного интеллекта для мгновенного создания тестов, экономя свое время и усилия</p>
                        </button>
                    </Link>
                </div>
            </nav>
        </dialog>
        // </div>
    );
}