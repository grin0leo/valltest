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
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.390524 0.390524C0.911223 -0.130175 1.75544 -0.130175 2.27614 0.390524L8 6.11438L13.7239 0.390524C14.2446 -0.130175 15.0888 -0.130175 15.6095 0.390524C16.1302 0.911223 16.1302 1.75544 15.6095 2.27614L9.88562 8L15.6095 13.7239C16.1302 14.2446 16.1302 15.0888 15.6095 15.6095C15.0888 16.1302 14.2446 16.1302 13.7239 15.6095L8 9.88562L2.27614 15.6095C1.75544 16.1302 0.911223 16.1302 0.390524 15.6095C-0.130175 15.0888 -0.130175 14.2446 0.390524 13.7239L6.11438 8L0.390524 2.27614C-0.130175 1.75544 -0.130175 0.911223 0.390524 0.390524Z" fill="#49494A"/>
    </svg>
                        </button>
                    </div>
                    <div className={css.buttonsgap}>
                        <button className={css.choosebuttons}>
                            <div className={css.buttonstitle}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="white"/>
    <path d="M14 14L18.5 18.5M14 14H11L10 11L11 10L14 11V14ZM27.259 10.741L24.6314 13.3686C24.2354 13.7646 24.0373 13.9627 23.9632 14.191C23.8979 14.3918 23.8979 14.6082 23.9632 14.809C24.0373 15.0373 24.2354 15.2354 24.6314 15.6314L24.8686 15.8686C25.2646 16.2646 25.4627 16.4627 25.691 16.5368C25.8918 16.6021 26.1082 16.6021 26.309 16.5368C26.5373 16.4627 26.7354 16.2646 27.1314 15.8686L29.5893 13.4107C29.854 14.0549 30 14.7604 30 15.5C30 18.5376 27.5376 21 24.5 21C24.1338 21 23.7759 20.9642 23.4298 20.8959C22.9436 20.8001 22.7005 20.7521 22.5532 20.7668C22.3965 20.7824 22.3193 20.8059 22.1805 20.8802C22.0499 20.9501 21.919 21.081 21.657 21.343L14.5 28.5C13.6716 29.3284 12.3284 29.3284 11.5 28.5C10.6716 27.6716 10.6716 26.3284 11.5 25.5L18.657 18.343C18.919 18.081 19.0499 17.9501 19.1198 17.8195C19.1941 17.6807 19.2176 17.6035 19.2332 17.4468C19.2479 17.2995 19.1999 17.0564 19.1041 16.5702C19.0358 16.2241 19 15.8662 19 15.5C19 12.4624 21.4624 10 24.5 10C25.5055 10 26.448 10.2698 27.259 10.741ZM20.0001 22.9999L25.5 28.4999C26.3284 29.3283 27.6716 29.3283 28.5 28.4999C29.3284 27.6715 29.3284 26.3283 28.5 25.4999L23.9753 20.9753C23.655 20.945 23.3427 20.8872 23.0408 20.8043C22.6517 20.6975 22.2249 20.7751 21.9397 21.0603L20.0001 22.9999Z" stroke="#141415" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

                                <h2 className={css.h2}>Создание теста самостоятельно</h2>
                            </div>
                            <p className={css.p}>Создавайте тесты самостоятельно с детальной проработкой каждого вопроса, чтобы максимально точно соответствовать вашим требованиям и целям обучения</p>
                        </button>
                        <button className={css.choosebuttons}>
                            <div className={css.buttonstitle}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="white"/>
    <path d="M24 26L30 20L24 14M16 14L10 20L16 26" stroke="#141415" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

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