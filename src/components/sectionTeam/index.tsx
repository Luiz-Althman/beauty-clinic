import { HeaderSection } from '../headerSection';
import { MobileSectionTeammatesSlider } from './mobile';
import { Teammates } from './teammates';

export function SeactionTeam() {
    return (
        <section
            className="my-45 flex flex-col jusfity-center items-center z-10"
            id="team"
        >
            <HeaderSection title="TEAM" className="text-center" />
            <div className="pb-16">
                <h3 className="font-judson md:text-4xl text-2xl text-brown pb-6 text-center">
                    Supported by certified experts
                </h3>
                <p className="font-inter text-gray-400 md:w-[476px] text-center">
                    At risus viverra adipiscing at in tellus integer feugiat
                    scelerisque pharetra diam sit.
                </p>
            </div>
            <div className="md:hidden flex">
                <MobileSectionTeammatesSlider />
            </div>
            <Teammates />
        </section>
    );
}
