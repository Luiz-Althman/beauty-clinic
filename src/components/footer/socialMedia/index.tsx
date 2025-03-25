'use client';

import Link from 'next/link';

import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialMedia = [
    {
        id: 1,
        icon: <FaFacebookF className="w-6 h-6" />,
        link: '#',
    },
    {
        id: 2,
        icon: <FaXTwitter className="w-6 h-6" />,
        link: '#',
    },
    {
        id: 3,
        icon: <FaInstagram className="w-6 h-6" />,
        link: '#',
    },
    {
        id: 4,
        icon: <FaWhatsapp className="w-6 h-6" />,
        link: '#',
    },
];

export function SocialMedia() {
    return (
        <div>
            <ul className="flex gap-4 items-center md:mt-0 mt-10">
                {socialMedia.map((social) => (
                    <li key={social.id}>
                        <Link
                            href={social.link}
                            target="_blank"
                            className="bg-yellow hover:bg-yellow/70 transition-colors duration-300 p-2 flex items-center justify-center rounded-full text-black hover:text-black/70"
                        >
                            {social.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
