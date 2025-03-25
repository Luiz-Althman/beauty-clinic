'use client';

import { socialMedia } from '@/mocks/SectionFooter';
import Link from 'next/link';

export function SocialMedia() {
    return (
        <div>
            <ul className="flex gap-4 items-center md:mt-0 mt-10">
                {socialMedia.map((social) => (
                    <li key={social.id}>
                        <Link
                            href={social.link}
                            target="_blank"
                            aria-label={`Visite nosso ${social.name}`}
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
