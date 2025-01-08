import { Link } from 'react-router-dom';

// Images

import footerBg from '@/assets/images/other/cityline.png'; // Add your background image path here

const Footer = () => {
    return (
        <footer
            className="bg-black text-white py-10 "
            style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'auto',  }}
        >
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Jaseena Trading Company</h2>
                    <p className="text-sm">
                        New ENB Building - OFFICE #1007 - Baniyas Rd, near Abra - Deira - Al Sabkha - Dubai - United Arab Emirates
                    </p>
                    <p className="text-sm">
                        <a href="http://www.jaseenainternational.com" target="_blank" rel="noopener noreferrer" className="underline">
                            www.jaseenainternational.com
                        </a>{' '}
                        |{' '}
                        <a href="http://www.jasina.com.sg" target="_blank" rel="noopener noreferrer" className="underline">
                            www.jasina.com.sg
                        </a>
                    </p>
                </div>

                <div className="space-y-6 text-center md:text-left">
                    <ul className="flex flex-col md:flex-row justify-center md:justify-start gap-4 text-sm">
                        <li>
                            <Link to="/privacy-policy" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms-conditions" className="hover:underline">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;