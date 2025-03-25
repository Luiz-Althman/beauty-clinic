import { twMerge } from 'tailwind-merge';

interface HeaderSectionProps extends React.ComponentProps<'header'> {
    title: 'ABOUT' | 'SERVICES' | 'TEAM' | 'PRICE';
}

export function HeaderSection({
    title,
    className,
    ...props
}: HeaderSectionProps) {
    return (
        <header
            className={twMerge('flex flex-col gap-1 text-left pb-6', className)}
            {...props}
        >
            <div
                className={`inline-flex flex-col border-b-[3px] border-yellow 
                ${title === 'SERVICES' && 'w-full'} 
                ${title === 'TEAM' && 'w-full'}
                ${title === 'PRICE' && 'md:w-[calc(100%-80%)] w-full'} 
                ${title === 'ABOUT' && 'md:w-[calc(100%-80%)] w-full'}`}
            >
                <h2 className="font-inter text-brown uppercase text-2xl">
                    {title}
                </h2>
                {/* <span className="bg-yellow h-1 w-[95px] mt-1" /> */}
            </div>
        </header>
    );
}
