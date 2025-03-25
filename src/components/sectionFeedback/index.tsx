import Image from 'next/image';
import { Feedbacks } from './feedbacks';

export function SectionFeedback() {
    return (
        <section
            className="my-45 bg-yellow py-20 relative z-10 flex flex-col justify-center items-center"
            id="team"
        >
            <div className="absolute inset-2 left-30 -z-50 hidden md:block">
                <Image
                    src="/feedback-bg.png"
                    width={1585.18}
                    height={712.42}
                    alt=""
                />
            </div>

            <div className="max-w-screen-xl mx-auto px-10">
                <Feedbacks />
            </div>
        </section>
    );
}
