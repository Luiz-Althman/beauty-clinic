'use client';

import Link from 'next/link';

interface MenuItem {
    id: number;
    name: string;
}

interface MenusFooterProps {
    keyName: 'PAGES' | 'GET HANDLING' | 'GET IN TOUCH' | 'OPEN HOURS'; // Chave que será passada via props
}

const items = {
    PAGES: [
        { id: 1, name: 'To top' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Services' },
        { id: 4, name: 'Pricing' },
        { id: 5, name: 'Contact' },
    ],
    'GET HANDLING': [
        { id: 1, name: 'Consultation' },
        { id: 2, name: 'Treatments' },
        { id: 3, name: 'Care Products' },
    ],
    'GET IN TOUCH': [
        { id: 1, name: '+55 (11) 94746-9137' },
        { id: 2, name: 'luizalthmandev@gmail.com' },
        { id: 3, name: 'Rua exemplo, Vila exemplo, 123' },
    ],
    'OPEN HOURS': [{ id: 1, name: 'Mon - Fri: 10:00 AM - 07:00 PM' }],
};

export function MenusFooter({ keyName }: MenusFooterProps) {
    const menuItems = items[keyName];
    return (
        <div className="">
            <div className="flex flex-col gap-1 md:pb-8 pb-3.5">
                <h5 className="font-inter text-brown uppercase">
                    {keyName.replace(/_/g, ' ')}
                </h5>
                <span className="bg-yellow h-1 w-[74px] mt-1" />
            </div>
            <div className="flex flex-col gap-2">
                {/* Fazendo o map com os itens da chave passada */}
                {menuItems.map((item: MenuItem) => (
                    <div key={item.id}>
                        <Link
                            href={`#${
                                item.name === 'To top'
                                    ? 'home'
                                    : item.name.toLowerCase()
                            }`}
                            className="font-inter text-gray-400 hover:text-gray-300 transition-colors duration-300 md:text-base text-sm"
                        >
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
