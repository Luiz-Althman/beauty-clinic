'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export function SectionBanner() {
    return (
        <section
            className="md:flex md:justify-between md:mb-30 md:mt-60 my-45"
            id="home"
        >
            <div className="md:w-3/4 w-full text-center md:text-left">
                <h1 className="font-judson md:text-6xl text-3xl text-brown pb-7">
                    Exclusive beauty clinic for you who are special
                </h1>
                <div className="relative md:hidden flex items-center justify-center my-6">
                    {/* Estrela menor (entra primeiro) */}
                    <motion.span
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="absolute top-3/6 left-25 rotate-65"
                    >
                        <Image
                            src="/star.png"
                            width={15}
                            height={15}
                            alt="Icone de estrela"
                            priority
                        />
                    </motion.span>

                    {/* Estrela média (entra depois) */}
                    <motion.span
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="absolute top-3/5 left-13 rotate-45"
                    >
                        <Image
                            src="/star.png"
                            width={30}
                            height={30}
                            alt="Icone de estrela"
                            priority
                        />
                    </motion.span>

                    {/* Estrela maior (entra por último) */}
                    <motion.span
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute top-2/5 -left-2 rotate-5"
                    >
                        <Image
                            src="/star.png"
                            width={35}
                            height={35}
                            alt="Icone de estrela"
                            priority
                        />
                    </motion.span>

                    {/* Imagem principal (entra da direita para a esquerda) */}
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/img-banner.png"
                            alt=""
                            width={214}
                            height={257}
                            priority
                        />
                    </motion.div>
                </div>

                <p className="font-inter text-gray-400 md:w-2/3 pb-14">
                    At risus viverra adipiscing at in tellus integer feugiat
                    scelerisque. Pharetra diam sit amet nisl suscipit.
                </p>
                <button
                    type="button"
                    className="bg-brown hover:bg-brown/80 transition-colors duration-300 cursor-pointer py-4 px-9 text-white hover:text-white/80 font-inter rounded-4xl"
                >
                    Learn More
                </button>
            </div>
            <div className="relative hidden md:block">
                <span className="absolute top-2/5 -left-25 rotate-5">
                    <Image
                        src="/star.png"
                        width={45}
                        height={45}
                        alt="Icone de estrela"
                    />
                </span>
                <span className="absolute top-3/5 -left-5 rotate-45">
                    <Image
                        src="/star.png"
                        width={39}
                        height={39}
                        alt="Icone de estrela"
                    />
                </span>
                <span className="absolute top-3/6 left-10 rotate-65" id="about">
                    <Image
                        src="/star.png"
                        width={20}
                        height={20}
                        alt="Icone de estrela"
                    />
                </span>
                <Image src="/img-banner.png" alt="" width={414} height={457} />
            </div>
        </section>
    );
}
