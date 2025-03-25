import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function Whatsapp() {
    return (
        <Link
            href="https://wa.me/5511947469137?text=Ol%C3%A1%2C%20quero%20uma%20p%C3%A1gina%20web!"
            target="_blank"
            aria-label="Botão para contato no whatsapp"
            className="fixed bottom-5 right-5 z-50 bg-yellow hover:bg-yellow/85 rounded-full p-3 animate-bounce"
        >
            <FaWhatsapp className="text-brown text-4xl hover:text-brown/85" />
        </Link>
    );
}
