'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeaderSection } from '../headerSection';
import { PriceServices } from './priceService';
import { PriceBrands } from './priceBrands';

export function SectionPrice() {
    return (
        <section className="my-45 flex flex-col justify-end">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex flex-col items-center justify-center md:block">
                    <HeaderSection title="PRICE" />
                    <h3 className="font-judson md:text-4xl text-2xl text-brown">
                        Service fees for your beauty and body care
                    </h3>
                    <div className="flex items-end space-x-5 md:hidden">
                        {/* Imagem dos cílios (Vem da esquerda) */}
                        <motion.div
                            whileInView={{ x: [-100, 0], opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="flex flex-col items-end"
                        >
                            <Image
                                src="/price-eyelash.png"
                                width={161}
                                height={268}
                                alt="Imagem mostrando penteado em cabelo de mulher"
                                priority
                            />
                        </motion.div>

                        {/* Imagem do cabelo (Vem da direita) */}
                        <motion.div
                            whileInView={{ x: [100, 0], opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/price-hair.png"
                                width={275}
                                height={458}
                                alt="Ilustração de mulher em procedimento nos cílios"
                                priority
                            />
                        </motion.div>
                    </div>
                    <PriceServices />
                </div>
                <div className="md:flex items-end space-x-5 hidden">
                    <div className="flex flex-col items-end">
                        <Image
                            src="/price-eyelash.png"
                            width={161}
                            height={268}
                            alt="Imagem mostrando penteado em cabelo de mulher"
                        />
                    </div>
                    <div>
                        <Image
                            src="/price-hair.png"
                            width={275}
                            height={458}
                            alt="Ilustração de mulher em procedimento nos cílios"
                        />
                    </div>
                </div>
            </div>
            <PriceBrands />
        </section>
    );
}
