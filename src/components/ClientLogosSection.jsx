import greenPlusLogo from '../assets/images/partners/greenplus.png';
import marblengroveLogo from '../assets/images/partners/marblengrove.png';
import nafLogo from '../assets/images/partners/Naf.png';

const ClientLogosSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-gray-600">We collaborate with top organizations across various sectors</p>
                </div>

                <div className="w-full px-5 md:px-2 inline-flex justify-center items-center overflow-x-auto gap-x-4">
                    <img src={greenPlusLogo} alt="Green Plus Partner" className="w-36 h-auto client-logo" />
                    <img src={marblengroveLogo} alt="Marble Grove Partner" className="w-64 h-auto client-logo" />
                    <img src={nafLogo} className="w-32 h-auto client-logo" />
                </div>
            </div>
        </section>
    );
};

export default ClientLogosSection;
