import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const teammates = [
    {
        id: 1,
        name: 'Mariah doe',
        role: 'Dermatologist',
        img: '/team-mariah.png',
        socialsMedia: [
            {
                id: 1,
                icon: <FaFacebookF className="w-4 h-4" />,
                link: '#',
            },
            { id: 2, icon: <FaXTwitter className="w-4 h-4" />, link: '#' },
            { id: 3, icon: <FaInstagram className="w-4 h-4" />, link: '#' },
        ],
    },
    {
        id: 2,
        name: 'jane doe',
        role: 'Beautician',
        img: '/team-jane.png',
        isActive: true,
        socialsMedia: [
            {
                id: 1,
                icon: <FaFacebookF className="w-4 h-4" />,
                link: '#',
            },
            { id: 2, icon: <FaXTwitter className="w-4 h-4" />, link: '#' },
            { id: 3, icon: <FaInstagram className="w-4 h-4" />, link: '#' },
        ],
    },
    {
        id: 3,
        name: 'john doe',
        role: 'Surgeon',
        img: '/team-john.png',
        socialsMedia: [
            {
                id: 1,
                icon: <FaFacebookF className="w-4 h-4" />,
                link: '#',
            },
            { id: 2, icon: <FaXTwitter className="w-4 h-4" />, link: '#' },
            { id: 3, icon: <FaInstagram className="w-4 h-4" />, link: '#' },
        ],
    },
];
