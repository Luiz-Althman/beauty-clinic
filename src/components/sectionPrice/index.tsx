'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeaderSection } from '../headerSection';
import { PriceServices } from './priceService';
import { PriceBrands } from './priceBrands';

export function SectionPrice() {
    return (
        <section className="my-45 flex flex-col justify-end" id="preco">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex flex-col items-center justify-center md:block">
                    <HeaderSection title="PRICE" />
                    <h3 className="font-judson md:text-4xl text-2xl text-brown">
                        Service fees for your beauty and body care
                    </h3>
                    <div className="flex items-end space-x-5 md:hidden">
                        <motion.div
                            whileInView={{ scale: [0.8, 1], opacity: 1 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/price-eyelash.png"
                                width={161}
                                height={268}
                                alt="Imagem mostrando penteado em cabelo de mulher"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ scale: [0.8, 1], opacity: 1 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: 'easeOut',
                            }}
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
                        <motion.div
                            whileInView={{ scale: [0.8, 1], opacity: 1 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/price-eyelash.png"
                                width={161}
                                height={268}
                                alt="Imagem mostrando penteado em cabelo de mulher"
                                priority
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        whileInView={{ scale: [0.8, 1], opacity: 1 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: 'easeOut',
                        }}
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
            </div>
            <PriceBrands />
        </section>
    );
}
