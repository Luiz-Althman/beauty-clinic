'use client';

import { teammates } from '@/mocks/SectionTeammates';
import Image from 'next/image';
import Link from 'next/link';

export function Teammates() {
    return (
        <div className="flex justify-between w-full">
            {teammates.map((teammate) => (
                <div
                    key={teammate.id}
                    className={`flex flex-col items-center justify-center p-5 ${
                        teammate.isActive === true &&
                        'border border-white  rounded-tl-full rounded-tr-full'
                    } `}
                >
                    <div className="pb-10">
                        <Image
                            src={teammate.img}
                            alt={teammate.name}
                            width={260}
                            height={260}
                        />
                    </div>
                    <div className="font-inter flex flex-col gap-1.5 pb-5">
                        <h4 className="text-brown uppercase">
                            {teammate.name}
                        </h4>
                        <p className="text-gray-400">{teammate.role}</p>
                    </div>
                    <div className="flex gap-4 pb-14">
                        {teammate.socialsMedia.map((socialMedia) => (
                            <Link
                                key={socialMedia.id}
                                target="_blank"
                                href={socialMedia.link}
                                className="bg-yellow hover:bg-yellow/70 transition-colors duration-300 p-2 flex items-center justify-center rounded-full text-black hover:text-black/70"
                            >
                                {socialMedia.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
