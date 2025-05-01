'use client'

import css from './createTestButton.module.css'
import Image from 'next/image'

type CreateTestButtonProps = {
    text?: string;
    onClick: () => void;
}

export function CreateTestButton({ text = '', onClick }: CreateTestButtonProps) {


    return (
        <button onClick={onClick} className={css.button} aria-label="Создать тест">
            <Image src={"/Layout/cross.svg"} width={16} height={16} alt="Иконка Создать тест" />
            {text && (
                <p>
                    {text}
                </p>)}
        </button>
    )
}