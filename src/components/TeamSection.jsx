const TeamSection = () => {
    const teamMembers = [
        {
            type: 'ceo',
            name: 'Mal. Muhammad Jibril Abdullahi SWE ( Dokajin Dosa)',
            position: 'Founder & Executive Chairman / CEO',
            description: 'Visionary leader with 5+ years in construction and business development.'
        },
        {
            type: 'md',
            name: 'Faisal Dantata MSPE MISENG',
            position: 'Cofounder & MD',
            description: 'An oil and gas engineer with proven leadership skills and a vision for sustainable success.'
        },
        {
            type: 'coo',
            name: 'Farida Dantata',
            position: 'Chief Operating Officer',
            description: 'A skilled civil engineer who applies technical expertise and structured thinking to ensure operational excellence.'
        }
    ];

    return (
        <section id="team" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Leadership Team</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experienced professionals dedicated to excellence and innovation
                    </p>
                </div>
                <div className="flex flex-col items-center gap-8">
                    {/* CEO */}
                    <div className="flex justify-center">
                        <div className="text-center group max-w-[350px]">
                            <div className="bg-white rounded-lg p-8 mb-4 shadow-lg hover-lift">
                                <div className="bg-cover ceo-card w-40 h-40 mx-auto shadow-lg rounded-full flex items-center justify-center mb-4"></div>
                                <h3 className="font-semibold text-lg text-primary">{teamMembers[0].name}</h3>
                                <p className="text-gray-600">{teamMembers[0].position}</p>
                                <p className="text-sm text-gray-500 mt-3">{teamMembers[0].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* MD and COO */}
                    <div className="flex justify-center gap-8 flex-wrap">
                        {teamMembers.slice(1).map((member, index) => (
                            <div key={index} className="text-center group max-w-[350px]">
                                <div className="bg-white rounded-lg p-8 mb-4 shadow-lg hover-lift">
                                    <div className={`bg-cover ${member.type}-card w-40 h-40 mx-auto shadow-lg rounded-full flex items-center justify-center mb-4`}></div>
                                    <h3 className="font-semibold text-lg text-primary">{member.name}</h3>
                                    <p className="text-gray-600">{member.position}</p>
                                    <p className="text-sm text-gray-500 mt-3">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
