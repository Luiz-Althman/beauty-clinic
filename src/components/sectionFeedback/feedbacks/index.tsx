'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import '../../../app/globals.css';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaCircle } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';
import { feedbacks } from '@/mocks/SectionFeedback';

export function Feedbacks() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1, spacing: 10 },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    return (
        <div className="relative flex flex-col items-center">
            <button
                onClick={() => instanceRef.current?.prev()}
                type="button"
                name="Botão para voltar o ultimo feedback"
                className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-white hidden md:block"
            >
                <ChevronLeft size={42} />
            </button>

            <div
                ref={sliderRef}
                className="keen-slider md:max-w-[766px] max-w-[330px]"
            >
                {feedbacks.map((feedback) => {
                    const name = feedback.name.split(' ');
                    const firstName = name[0]?.[0] || '';
                    const lastName = name[1]?.[0] || '';

                    return (
                        <div
                            key={feedback.id}
                            className="max-w-[766px] leading-4 flex flex-col items-center justify-center text-center keen-slider__slide"
                        >
                            <div className="pb-14 max-w-[766px]">
                                <p className="text-brown md:text-4xl text-2xl font-judson">
                                    &quot;{feedback.feedback}&quot;
                                </p>
                            </div>
                            <div className="pb-3.5">
                                <Avatar
                                    style={{ width: '60px', height: '60px' }}
                                >
                                    <AvatarImage
                                        src={feedback.img}
                                        alt="Foto de perfil do do usuário que deixou o feedback"
                                    />
                                    <AvatarFallback>
                                        {firstName}
                                        {lastName}
                                    </AvatarFallback>
                                </Avatar>
                            </div>

                            <div className="flex flex-col gap-2 font-inter">
                                <p className="text-brown">{feedback.name}</p>
                                <p className="text-gray-400">{feedback.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button
                type="button"
                name="Botão para prosseguir ao próximo feedback"
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-white hidden md:block"
            >
                <ChevronRight size={42} />
            </button>

            <div className="md:hidden flex gap-2 pt-10">
                {feedbacks.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() =>
                            instanceRef.current?.moveToIdx(index, true, {
                                duration: 1000,
                            })
                        }
                        className="text-gray-400 hover:text-gray-600 transition p-1.5"
                        name="Botão de navegação dos feedbacks"
                    >
                        {currentSlide === index ? (
                            <FaCircle size={12} />
                        ) : (
                            <FaRegCircle size={12} />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
