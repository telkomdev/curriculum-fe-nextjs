import { useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../../../context/auth';
import Button from '../Button';

export default function NavBar(props) {
  const { navs } = props;
  const { user, logout } = useAuth();

  const onLogout = (force = false) => {
    if (force) {
        logout();
        return;
    }
    if (confirm('Anda yakin untuk keluar ?') == true) {
        logout();
    }
  };

  useEffect(() => {
    if (!user) {
        onLogout(true);
    }
  }, [user]);

  return (
    <div className="flex items-center justify-between mb-4">
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {navs.map((nav, index) => 
                    Boolean(index < (navs.length - 1)) ? (
                        <li className={index === 0 ? 'inline-flex items-center' : ''} key={`nav-${index}`}>
                            {index > 0 && <span className="text-gray-400 text-xs mr-2">&#11137;</span>}
                            <Link href={index === 0 ? '/' : nav.link}>
                                <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    {index === 0 && <span className="mr-2 text-xs">&#10070;</span>}
                                    {nav.name}
                                </a>
                            </Link>
                        </li>
                    ) : (
                        <li aria-current="page" className="flex items-center" key={`nav-${index}`}>
                            <span className="text-gray-400 text-xs">&#11137;</span>
                            <a><span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{nav.name}</span></a>
                        </li>     
                    )
                )}
            </ol>
        </nav>
        {Boolean(user) && (
            <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-400 dark:hover:text-white">{`Hi ${user.email}`}</p>
                <Button onClick={() => onLogout()} customClass='px-2 py-1 ml-2'>
                    <span>&#10149;</span>
                </Button>
            </div>
        )}
    </div>
  );
};