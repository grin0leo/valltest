import { LeftAside } from "@/shared/ui/Aside";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <LeftAside />
            {children}
        </>

    );
}
