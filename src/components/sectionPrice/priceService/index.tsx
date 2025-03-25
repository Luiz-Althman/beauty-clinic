'use client';

const services = [
    {
        id: 1,
        service: 'Facial Treatments',
        price: 299.0,
    },
    {
        id: 2,
        service: 'SPA & Massage',
        price: 129.0,
    },
    {
        id: 3,
        service: 'Beauty Salon',
        price: 50.0,
    },
    {
        id: 4,
        service: 'Manicure & Pedicure',
        price: 40.0,
    },
    {
        id: 5,
        service: 'Face Surgery',
        price: 1999.9,
    },
];

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export function PriceServices() {
    return (
        <div className="pt-14">
            <div className="flex justify-between items-center uppercase font-inter text-brown md:text-base text-sm">
                <p>Treatments</p>
                <p>Start form</p>
            </div>
            <div className="font-inter text-gray-400 pt-9">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="flex justify-between items-center pb-6 gap-4 md:gap-0"
                    >
                        <div>
                            <p className="md:text-base text-sm">
                                {service.service}
                            </p>
                        </div>
                        <span className="bg-white h-[1px] md:w-[290px] w-[150px]" />
                        <div>
                            <p className="md:text-base text-sm">
                                {formatter.format(Number(service.price))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
