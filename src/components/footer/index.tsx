import Image from 'next/image';
import { MenusFooter } from './menusFooter';
import { SocialMedia } from './socialMedia';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';
import { FooterMobile } from './mobile';

export function Footer() {
    return (
        <footer
            className="mt-30 max-w-screen-xl mx-auto md:px-10 px-6"
            id="contact"
        >
            <FooterMobile />
            <div className="hidden md:flex justify-between w-full">
                <div>
                    <Image
                        src="/logo.png"
                        alt="Imagem do logo"
                        width={90}
                        height={40}
                        className="pb-8"
                    />
                    <p className="font-inter text-gray-400 max-w-[345px] pb-7">
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis volutpat est Elit pellentesque habitant.
                    </p>
                    <div className="flex flex-col gap-1 pb-3.5">
                        <h5 className="font-inter text-brown uppercase">
                            OPEN HOURS
                        </h5>
                        <span className="bg-yellow h-1 w-[74px] mt-1" />
                    </div>
                    <p className="font-inter text-gray-400 pb-10">
                        Mon - Fri: 10:00 AM - 07:00 PM
                    </p>
                    <SocialMedia />
                </div>
                <MenusFooter keyName="PAGES" />
                <MenusFooter keyName="GET HANDLING" />
                <MenusFooter keyName="GET IN TOUCH" />
            </div>
            <div className="w-full flex md:justify-end gap-20 md:pt-32 pb-10 pt-20 font-inter">
                <p className="text-gray-400 md:text-base text-sm">
                    &copy; Todos os direitos reservados - Luiz Althman - 2025
                </p>
                <Link
                    href="#home"
                    className="md:flex hidden items-center gap-2 text-brown hover:text-gray-300 transition-colors duration-300"
                >
                    <FaArrowUp className="text-black" /> To-top
                </Link>
            </div>
        </footer>
    );
}
