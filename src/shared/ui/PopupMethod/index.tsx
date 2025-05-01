'use client';

import { useRef } from "react";
import css from './popUp.module.css';
import Image from "next/image";


export function PopUpMethod () {
    
    const dialogRef = useRef<HTMLDialogElement>(null);
    const openDialog = () => dialogRef.current?.showModal();
    const closeDialog = () => dialogRef.current?.close();

    return (
        <div className={css.content}>
            <button className={css.button} onClick={openDialog}>Открыть попап</button>

            <dialog ref={dialogRef} className={css.dialog}>
                <nav className={css.nav}>
                    <div className={css.top}>
                        <h1 className={css.title}>Метод создания теста</h1>
                        <button className={css.close} onClick={closeDialog}>
                            <Image src='./2000.svg' alt={"error.image"}  width={16} height= {16} />
                        </button>
                    </div>
                    <div className={css.buttonsgap}>
                        <button className={css.choosebuttons}>
                            <div className={css.buttonstitle}>
                                <Image src= "./300.svg" alt = {"error.image"} width={40} height= {40} />

                                <h2 className={css.h2}>Создание теста самостоятельно</h2>
                            </div>
                            <p className={css.p}>Создавайте тесты самостоятельно с детальной проработкой каждого вопроса, чтобы максимально точно соответствовать вашим требованиям и целям обучения</p>
                        </button>
                        <button className={css.choosebuttons}>
                            <div className={css.buttonstitle}>
                                <Image src = "./400.svg" alt = {"error.image"} width={40} height= {40}/>

                                <h2 className={css.h2}>Создание теста ИИ</h2>
                            </div>
                            <p className={css.p}>Используйте возможности искусственного интеллекта для мгновенного создания тестов, экономя свое время и усилия</p>
                        </button>
                    </div>
                </nav>
            </dialog>
        </div>
    );
}