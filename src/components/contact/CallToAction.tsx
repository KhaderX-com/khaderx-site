import React from 'react';

const CallToAction = () => {
    return (
        <div className="text-center mt-16 pt-12 border-t border-gray-800/50">
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Start Your Project?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Whether you need aerospace engineering expertise, custom software development, or innovative solutions,
                I&apos;m here to help turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                    href="mailto:contact@khaderx.com"
                    className="btn-primary group"
                >
                    <span className="mr-2">Get In Touch</span>
                    <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>

                <a
                    href="/projects"
                    className="btn-secondary group"
                >
                    View My Work
                </a>
            </div>
        </div>
    );
};

export default CallToAction;
