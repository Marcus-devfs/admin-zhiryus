
interface MenuItem {
    id: string;
    title: string;
    icon: string;
    path: string;
    submenu?: MenuItem[];
}

export const MenuList: MenuItem[] = [
    {
        id: '01', title: 'Dashboard', icon: '', path: '/dashboard', submenu: []
    },
    {
        id: '02', title: 'Administrativo', icon: '', path: '/', submenu: [
            {
                id: '01', title: 'Funcionários', icon: '', path: '/'
            },
            {
                id: '02', title: 'Clientes', icon: '', path: '/'
            }
        ]
    },
    {
        id: '03', title: 'Comercial', icon: '', path: '/', submenu: [
            {
                id: '01', title: 'Comissões', icon: '', path: '/'
            },
            {
                id: '03', title: 'Vendas', icon: '', path: '/'
            }
        ]
    },
]