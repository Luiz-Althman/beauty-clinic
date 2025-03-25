'use client';

import Image from 'next/image';
import { services } from '@/mocks/SectionServices';
import '../../app/globals.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export function MobileServicesSlider() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1.1,
            spacing: 5,
        },
    });
    return (
        <div className="keen-slider max-w-[350px]" ref={sliderRef}>
            {services.map((service) => (
                <div key={service.id} className="relative keen-slider__slide">
                    <Image
                        src={service.image}
                        width={332}
                        height={332}
                        alt={service.text}
                        className="rounded-md"
                    />
                    <div
                        id="price"
                        className="bg-white/85 w-[235px] h-[150px] rounded-md flex justify-center items-center absolute top-1/4 left-10"
                    >
                        <p className="uppercase font-inter text-brown">
                            {service.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
