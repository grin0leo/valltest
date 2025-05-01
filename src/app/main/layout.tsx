import { LeftAside } from "@/shared/ui/Aside";
import css from './layout.module.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <LeftAside />
            <section className={css.wrapper} >
                {children}
            </section>
        </>

    );
}
