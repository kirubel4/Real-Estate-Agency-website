import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/pexels-binyaminmellish-106399-remove-preview.jpeg";
import { useState } from "react";
function Nav() {
    const routes = [
        { name: "Home", path: "/" },
        { name: "Properties", path: "/Properties" },
        { name: "About", path: "/About" },
        { name: "Service", path: "/Service" },
        { name: "Contact", path: "/Contact" }
    ];

    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

    function handleMobileMenu() {
        setIsMobileMenuShown(!isMobileMenuShown);
    }

    return (
        <nav className="flex flex-wrap items-center justify-between p-4 bg-transparent">
            <Link to="/">
                <img src={logo} className="h-24 w-24 lg:h-28 lg:w-28 rounded-full" />
            </Link>

            {/* Hamburger menu button, visible only on small screens */}
            <button
                onClick={handleMobileMenu}
                className="lg:hidden hover:bg-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-200 dark:bg-slate-200 dark:hover:scale-105 dark:active:scale-75"
            >
                <GiHamburgerMenu size={30} />
            </button>

            {/* Navigation links container */}
            <div className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block py-4`}>
                <ul className="flex flex-col lg:flex-row bg-gray-50 border border-gray-100 text-lg rounded-lg p-3 lg:bg-transparent lg:border-none lg:space-x-3 dark:bg-black">
                    {routes.map(({ name, path }) => (
                        <li className="py-2 dark:text-white" key={name}>
                            <Link
                                to={path}
                                className="block w-full hover:underline hover:bg-gray-100 rounded-lg p-3 dark:hover:bg-white dark:hover:text-black"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
