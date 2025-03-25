'use client';

import '../../../app/globals.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const brands = [
    { id: 1, img: '/price-fishida.png' },
    { id: 2, img: '/price-aircure.png' },
    { id: 3, img: '/price-emtk.png' },
    { id: 4, img: '/price-tiffany.png' },
    { id: 5, img: '/price-alexiz.png' },
];

const animation = { duration: 10000, easing: (t: number) => t };

export function PriceBrands() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: 'performance',
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        slides: {
            perView: 1.5,
            spacing: 10,
        },
        breakpoints: {
            '(min-width: 640px)': {
                slides: {
                    perView: 2,
                    spacing: 15,
                },
            },
            '(min-width: 1024px)': {
                slides: {
                    perView: 4,
                    spacing: 10,
                },
            },
        },
    });

    return (
        <div className="relative pt-28">
            <div ref={sliderRef} className="keen-slider">
                {brands.map((brand) => (
                    <div
                        key={brand.id}
                        id="feedback"
                        className="keen-slider__slide flex justify-center"
                    >
                        <Image src={brand.img} alt="" width={199} height={72} />
                    </div>
                ))}
            </div>
        </div>
    );
}
