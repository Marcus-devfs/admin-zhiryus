import Head from 'next/head';
import { FC } from 'react';
import { ProtectRoute } from '@/context/ProtectRoute';
import Sidebar from '@/components/LeftMenu/LeftMenu';
import { Navbar } from '@/components/navbar/Navbar';

interface PagesRouteProps {
    Component: React.ComponentType<any> & { noPadding?: boolean };
    pageProps: any;
}

import { faHome, faUsers, faBriefcase, faCashRegister, faCalculator, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface MenuItem {
    id: string;
    title: string;
    icon: IconDefinition; // Tipo do ícone para FontAwesome
    path: string;
    submenu?: MenuItem[];
}

export const MenuList: MenuItem[] = [
    {
        id: '02', 
        title: 'Menu', 
        icon: faHome,  // ícone para "Menu"
        path: '/', 
        submenu: [
            {
                id: '01', 
                title: 'Início', 
                icon: faHome,  // ícone para "Início"
                path: '/dashboard'
            },
            {
                id: '02', 
                title: 'Funcionários', 
                icon: faUsers,  // ícone para "Funcionários"
                path: '/users'
            },
            {
                id: '03', 
                title: 'Clientes', 
                icon: faUsers,  // ícone para "Clientes"
                path: '/customer'
            }
        ]
    },
    {
        id: '03', 
        title: 'Comercial', 
        icon: faBriefcase,  // ícone para "Comercial"
        path: '/', 
        submenu: [
            {
                id: '01', 
                title: 'Comissões', 
                icon: faCashRegister,  // ícone para "Comissões"
                path: '/comissions'
            },
            {
                id: '02', 
                title: 'Orçamentos', 
                icon: faCalculator,  // ícone para "Orçamentos"
                path: '/budget'
            },
            {
                id: '03', 
                title: 'Produtos', 
                icon: faShoppingCart,  // ícone para "Produtos"
                path: '/product'
            },
        ]
    },
];




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
                <div className="bg-gray-100 min-h-screen flex w-full">
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
