import Image from 'next/image';
import { MenusFooter } from './menusFooter';
import { SocialMedia } from './socialMedia';

export function FooterMobile() {
    return (
        <div className="md:hidden flex justify-between w-full">
            <div>
                <Image
                    src="/logo.png"
                    alt="Imagem do logo"
                    width={90}
                    height={40}
                    className="pb-8"
                />
                <p className="font-inter text-gray-400 max-w-[345px] pb-7">
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    volutpat est Elit pellentesque habitant.
                </p>

                <div className="grid grid-cols-2 gap-5">
                    <MenusFooter keyName="OPEN HOURS" />
                    <MenusFooter keyName="PAGES" />
                    <MenusFooter keyName="GET HANDLING" />
                    <MenusFooter keyName="GET IN TOUCH" />
                </div>
                <SocialMedia />
            </div>
        </div>
    );
}
