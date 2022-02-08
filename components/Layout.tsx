import Head from "next/head";

interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex h-screen w-screen justify-center bg-rose-300" >
            <Head>
                <title>TermoLad</title>
            </Head>
            {props.children}
        </div>
    )
}