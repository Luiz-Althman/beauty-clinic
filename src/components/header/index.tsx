'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

const menus = [
    { id: 0, name: 'About', path: '#about' },
    { id: 1, name: 'Services', path: '#services' },
    { id: 2, name: 'Price', path: '#preco' },
    { id: 3, name: 'Feedback', path: '#feedback' },
    { id: 4, name: 'Our Team', path: '#team' },
    { id: 5, name: 'Contact', path: '#contact' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState<number>();

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (!homeSection) return;

            const homeRect = homeSection.getBoundingClientRect();
            setIsScrolled(homeRect.bottom <= 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full transition-colors fixed z-50 top-0 left-0 duration-300 ${
                isScrolled && 'bg-gray-200'
            }`}
        >
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-10 py-5 w-full">
                <div>
                    <Image
                        src="/logo.png"
                        alt="Imagem do logo"
                        width={90}
                        height={40}
                    />
                </div>

                <nav className="hidden md:flex gap-5">
                    {menus.map((menu, i) => (
                        <Link
                            key={menu.id}
                            href={menu.path}
                            onClick={() => setIsActive(menu.id)}
                            className={`font-inter text-xl transition-colors duration-300 text-gray-400 hover:text-gray-300 ${
                                isActive === i && 'font-bold text-black'
                            }`}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </nav>

                <button
                    className={`md:hidden text-gray-600 transition-transform duration-300 ${
                        isMenuOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <RxCross2 size={28} />
                    ) : (
                        <RxHamburgerMenu size={28} />
                    )}
                </button>

                <div className="hidden md:flex items-center gap-5">
                    <button
                        type="button"
                        className="rounded-md uppercase px-4 py-2 cursor-pointer font-inter transition-all duration-500 border border-yellow text-brown hover:bg-yellow"
                    >
                        make appointment
                    </button>
                </div>
            </div>

            <div
                className={`absolute top-full left-0 w-full bg-gray-200 shadow-lg p-5 flex flex-col gap-3 transition-all duration-300 ease-in-out 
                ${
                    isMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-5 pointer-events-none'
                }`}
            >
                {menus.map((menu) => (
                    <Link
                        key={menu.id}
                        href={menu.path}
                        aria-label={menu.name}
                        className="font-inter text-lg text-gray-700 hover:text-gray-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {menu.name}
                    </Link>
                ))}
            </div>
        </header>
    );
}
