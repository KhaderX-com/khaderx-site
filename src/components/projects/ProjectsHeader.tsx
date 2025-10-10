import React from 'react';

const ProjectsHeader = () => {
    return (
        <>
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-400/10 via-cyan-400/20 to-cyan-400/10 rounded-full mb-8 border border-cyan-400/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                <span className="mx-4 text-cyan-400 text-sm font-semibold uppercase tracking-wider">Project Portfolio</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading">
                Our <span className="text-neon-cyan">Projects</span>
            </h1>

            <div className="max-w-4xl mx-auto mb-16">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    Explore our portfolio of innovative engineering solutions and cutting-edge software development projects.
                </p>
                <div className="flex justify-center">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                </div>
            </div>
        </>
    );
};

export default ProjectsHeader;
