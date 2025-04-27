import { LeftAside } from "@/shared/ui/Aside";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <LeftAside />
            <section style={{ paddingLeft: '100px' }}>
                {children}
            </section>
        </>

    );
}
