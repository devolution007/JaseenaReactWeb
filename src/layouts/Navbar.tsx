import { Link } from 'react-router-dom';
import { getHorizontalMenuItems } from '../helpers/menu';
import AppMenu from './Menu';
import { useEffect } from 'react';
import { useThemeContext } from '@/context';

// Images
import logoLight from '@/assets/images/logo-light.png';
import logoDark from '@/assets/images/logo-dark.png';
import { useLogoTheme } from '@/hooks';

const Navbar = () => {
    const { settings } = useThemeContext();
    const { isDark } = useLogoTheme();

    const topNavLight = settings.topbar.theme === 'light';

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        document.addEventListener('scroll', () => {
            if (navbar) {
                if (window.pageYOffset >= 80) navbar.classList.add('nav-sticky');
                else navbar.classList.remove('nav-sticky');
            }
        });
    }, []);

    return (
        <header
            id="navbar"
            className={`${
                topNavLight ? 'light' : 'dark'
            } fixed top-0 inset-x-0 flex items-center z-40 w-full text-white py-4 px-8 shadow-md`}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img
                        src={isDark ? logoDark : logoLight}
                        className="h-10"
                        alt="Jaseena International Logo"
                    />
                </Link>

                {/* Navigation Menu */}
                <nav className="hidden lg:flex space-x-8 text-sm font-medium">
                    <AppMenu menuItems={getHorizontalMenuItems()} />
                </nav>

                {/* Mobile Menu Button */}
                <button className="lg:hidden flex items-center text-white">
                    <i className="fa-solid fa-bars text-2xl" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
