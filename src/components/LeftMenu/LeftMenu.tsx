import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';

interface MenuItem {
  id: string;
  title: string;
  icon: IconDefinition; // Definição correta para os ícones
  path: string;
  submenu?: MenuItem[];
}

interface SidebarProps {
  menu: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {

  const router = useRouter()
  const pathname = router.asPath

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 min-w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 z-50"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-lg">
        <Link href="/dashboard" className="flex items-center ps-2.5 mb-5">
          <img
            src="./icons/logo_construtora.png"
            className="h-6 me-3 sm:h-7"
            alt="Flowbite Logo"
            style={{
              filter: 'invert(100%) brightness(0%)',
            }}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">
            ZHIRYUS
          </span>
        </Link>
        <ul className="space-y-2 font-medium">
          {menu.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.submenu && menuItem.submenu.length > 0 ? (
                <div className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group text-white">
                  <span className="flex-1 ms-3 text-gray-500 text-left rtl:text-right whitespace-nowrap">
                    {menuItem.title}
                  </span>
                </div>
              ) : (
                <Link
                  href={menuItem.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group"
                >
                  <FontAwesomeIcon icon={menuItem.icon} className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 text-gray-500 ms-3 whitespace-nowrap hover:text-white">
                    {menuItem.title}
                  </span>
                </Link>
              )}

              {menuItem.submenu && menuItem.submenu.length > 0 && (
                <ul id={`dropdown-${menuItem.id}`} className="py-2 space-y-2">
                  {menuItem.submenu.map((subMenuItem) => (
                    <Link
                      key={subMenuItem.id}
                      href={subMenuItem.path}
                      className={`flex gap-2 items-center w-full p-2 text-gray-500 transition duration-75
                       rounded-lg pl-11 ${pathname.includes(subMenuItem.path) && 'bg-gray-700 text-white'} group hover:bg-gray-100 hover:text-white hover:bg-gray-700`}
                    >
                      <FontAwesomeIcon icon={subMenuItem.icon} className={`w-5 h-5 text-gray-400 
                      ${pathname.includes(subMenuItem.path) && 'text-white'}
                       group-hover:text-gray-900 group-hover:text-white`} />
                      <span className="hover:currentColor">
                        {subMenuItem.title}
                      </span>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
