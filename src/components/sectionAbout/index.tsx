'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeaderSection } from '../headerSection';

export function SectionAbout() {
    return (
        <section className="flex flex-col md:flex-row md:justify-between items-center my-45">
            <HeaderSection title="ABOUT" className="md:hidden" />

            <div className="md:flex items-end space-x-5 hidden">
                {/* Imagem da mulher - Animação Scale In */}
                <motion.div
                    whileInView={{ scale: [0.8, 1], opacity: 1 }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/woman-about.png"
                        width={275}
                        height={458}
                        alt="Ilustração de mulher em procedimento estético no rosto"
                        priority
                    />
                </motion.div>

                <div className="flex flex-col items-end">
                    {/* Imagem dos materiais - Animação Scale In */}
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
                            src="/items-about.png"
                            width={161}
                            height={268}
                            alt="Ilustração de materiais usados no procedimento"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
            <div className="md:w-1/2 w-full text-center md:text-left">
                <HeaderSection title="ABOUT" className="hidden md:flex" />
                <h3 className="text-brown md:text-4xl text-2xl font-judson pb-6">
                    We provide special care for your appearance and beauty
                </h3>
                <div className="flex items-center justify-center md:hidden relative ">
                    <motion.div
                        whileInView={{ scale: [0.8, 1], opacity: 1 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/woman-about.png"
                            width={275}
                            height={458}
                            alt="Ilustração de mulher em procedimento estético no rosto"
                            priority
                        />
                    </motion.div>
                    <div className="absolute bottom-0 right-0">
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
                                src="/items-about.png"
                                width={80}
                                height={150}
                                alt="Ilustração de materiais usados no procedimento"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
                <p className="font-inter text-gray-400 pb-14 pt-6 md:pt-0">
                    At risus viverra adipiscing at in tellus integer feugiat
                    scelerisque. Pharetra diam sit amet nisl suscipit. <br />
                    <br />
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    volutpat est. Elit pellentesque habitant morbi tristique
                    senectus et netus et malesuada.
                </p>
                <button
                    type="button"
                    className="bg-brown hover:bg-brown/80 transition-colors duration-300 cursor-pointer py-4 px-9 text-white hover:text-white/80 font-inter rounded-4xl"
                >
                    Learn More
                </button>
            </div>
        </section>
    );
}
