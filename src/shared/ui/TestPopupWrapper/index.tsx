'use client';

import { RefObject, useRef } from "react";
import { PopUpMethod } from "../PopupMethod";
import { CreateTestButton } from "../CreateTestButton";

export function TestPopupWrapper({ text = '' }: { text?: string }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const openDialog = () => dialogRef.current?.showModal();
    const closeDialog = () => dialogRef.current?.close();

    return (
        <>
            <CreateTestButton text={text} onClick={openDialog} />
            <PopUpMethod dialogRef={dialogRef as RefObject<HTMLDialogElement>} closeDialog={closeDialog} />
        </>
    );
}
