import Image from 'next/image';
import { HeaderSection } from '../headerSection';

import { services } from '@/mocks/SectionServices';
import { MobileServicesSlider } from './mobile';

export function SectionService() {
    return (
        <section
            className="flex flex-col justify-center items-center my-45 md:my-30"
            id="services"
        >
            <div className="flex flex-col w-full items-center justify-center gap-1 pb-10">
                <HeaderSection title="SERVICES" />
                <p className="font-judson md:text-4xl text-2xl text-center text-brown">
                    We always provide the best service for you
                </p>
            </div>
            <div className="md:hidden flex">
                <MobileServicesSlider />
            </div>

            <div className="md:grid grid-cols-3 gap-15 hidden">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="relative w-[300px] h-[300px]"
                    >
                        <Image
                            src={service.image}
                            width={332}
                            height={302}
                            alt={service.text}
                        />
                        <div className="bg-white/85 w-[235px] h-[150px] flex justify-center items-center absolute inset-0 m-auto">
                            <p className="uppercase font-inter text-brown">
                                {service.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
