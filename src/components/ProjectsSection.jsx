const ProjectsSection = () => {
    const projects = [
        {
            title: "Infrastructure Development",
            description: "Major highway construction project connecting key economic zones.",
            status: "Completed 2024",
            gradient: "from-primary to-primary-light"
        },
        {
            title: "Commercial Complex",
            description: "Modern office and retail complex with sustainable design features.",
            status: "In Progress",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            title: "Agricultural Facility",
            description: "State-of-the-art processing and storage facility for agricultural products.",
            status: "Completed 2023",
            gradient: "from-green-500 to-green-600"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold gradient-text mb-6">Our Projects & Solutions</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Showcasing our commitment to excellence across diverse projects
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift">
                            <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                                <svg className="w-16 h-16 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{project.status}</span>
                                    <button className="text-primary hover:text-primary-light font-semibold">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
