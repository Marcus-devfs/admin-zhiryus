import Head from 'next/head';
import { FC } from 'react';
import { ProtectRoute } from '@/context/ProtectRoute';
import { MenuList } from '@/helpers/menu';
import Sidebar from '@/components/LeftMenu/LeftMenu';
import { Navbar } from '@/components/navbar/Navbar';

interface PagesRouteProps {
    Component: React.ComponentType<any> & { noPadding?: boolean };
    pageProps: any;
}



const PagesRoute: FC<PagesRouteProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>ZHIRYUS Mobiliário Corporativo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link
                    rel="icon"
                    href="./icons/logo_construtora.png"
                />
            </Head>
            <ProtectRoute>
                <div className="bg-gray-300 min-h-screen flex w-full">
                    <Sidebar menu={MenuList} />
                    <Navbar />
                    <div className="flex overflow-auto w-full flex-col gap-8 py-24 px-8 pl-[250px]">
                        <Component {...pageProps} />
                    </div>
                </div>
            </ProtectRoute>
        </>
    );
};

export default PagesRoute;