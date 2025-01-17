import Link from 'next/link';

export default function NavBar(props) {
  const { navs } = props;
  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
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
  );
};