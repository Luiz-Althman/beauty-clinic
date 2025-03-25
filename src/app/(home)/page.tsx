import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { SectionAbout } from '@/components/sectionAbout';
import { SectionBanner } from '@/components/sectionBanner';
import { SectionFeedback } from '@/components/sectionFeedback';
import { SectionPrice } from '@/components/sectionPrice';
import { SectionService } from '@/components/sectionService';
import { SeactionTeam } from '@/components/sectionTeam';

export default function Home() {
    return (
        <main>
            <div className="max-w-screen-xl mx-auto md:px-10 px-6">
                <Header />
                <SectionBanner />
                <SectionAbout />
                <SectionService />
                <SectionPrice />
            </div>
            <SectionFeedback />
            <div className="max-w-screen-xl mx-auto md:px-10 px-6">
                <SeactionTeam />
            </div>
            <div className="h-[1px] border border-t-white w-full" />
            <Footer />
        </main>
    );
}
