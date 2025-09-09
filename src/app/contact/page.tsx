import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
            <Navbar />

            <main className="container mx-auto px-4 py-12 pt-24 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Contact & About
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Aerospace Engineer & Python Developer passionate about innovation and technology
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Personal Information */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center mb-6">
                            <div className="bg-cyan-100 p-3 rounded-full mr-4">
                                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-gray-800">ABUELTAYEF Khader</p>
                                    <p className="text-gray-600">Aerospace & Aeronautical Engineer | Python & Flutter Developer</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-gray-800">abueltayef.khader@gmail.com</p>
                                    <p className="text-gray-600">abueltayef.khader@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="text-gray-800">+32 483 817 658</p>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gray-800">Belgium</p>
                            </div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center mb-6">
                            <div className="bg-cyan-100 p-3 rounded-full mr-4">
                                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0V1m10 3V1m0 3l1 1v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5l1-1z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Languages</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { name: 'Arabic', level: 'Native' },
                                { name: 'French', level: 'Fluent' },
                                { name: 'English', level: 'Fluent' }
                            ].map((language, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="font-medium text-gray-800">{language.name}</span>
                                    <span className="text-sm text-cyan-600 font-medium">{language.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-cyan-100 p-3 rounded-full mr-4">
                            <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Education</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="border-l-4 border-cyan-500 pl-6">
                            <div className="flex items-center mb-2">
                                <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                                <span className="text-sm font-medium text-cyan-600">2023 - 2025</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Master in Aerospace Engineering</h3>
                            <p className="text-gray-600">Aerospace & Aeronautical Engineering</p>
                            <p className="text-sm text-gray-500">University of Liège, Belgium</p>
                        </div>

                        <div className="border-l-4 border-cyan-500 pl-6">
                            <div className="flex items-center mb-2">
                                <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                                <span className="text-sm font-medium text-cyan-600">2020 - 2023</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Bachelor in Civil Engineering</h3>
                            <p className="text-gray-600">Obtained with Distinction</p>
                            <p className="text-sm text-gray-500">University of Liège, Belgium</p>
                        </div>

                        <div className="border-l-4 border-cyan-500 pl-6">
                            <div className="flex items-center mb-2">
                                <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                                <span className="text-sm font-medium text-cyan-600">2019 - 2020</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">CESS</h3>
                            <p className="text-sm text-gray-500">Institut du Sacré-Cœur (ISC) de VIELSALM, Belgium</p>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-cyan-100 p-3 rounded-full mr-4">
                            <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Skills & Expertise</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Programming</h3>
                            <div className="space-y-2">
                                {[
                                    '<strong>Python</strong> - Full Stack (Frontend & Backend)',
                                    '<strong>Flutter - Dart</strong> (Mobile & Desktop Applications Development)',
                                    '<strong>PowerShell/Bash</strong> Scripting',
                                    '<strong>C/C++</strong> (Basic Knowledge)',
                                    '<strong>HTML/CSS/JavaScript</strong> (Basic Knowledge)',
                                    '<strong>LaTeX</strong> (Document Preparation)'
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                                        <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: skill }}></span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Software & Tools</h3>
                            <div className="space-y-2">
                                {[
                                    'Microsoft Office',
                                    'NX Siemens',
                                    'Granta (Material Selection)',
                                    'MATLAB - Simulink',
                                    'XFOIL',
                                    'Git - GitHub',
                                    'VS Code',
                                    'Jupyter Notebook',
                                    'Anaconda',
                                    'Android Studio',
                                    'Figma - Canva'
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                                        <span className="text-gray-700">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links & Profiles */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-cyan-100 p-3 rounded-full mr-4">
                            <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Links & Profiles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <a
                            href="https://github.com/Khader20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-300 group"
                        >
                            <svg className="w-8 h-8 text-gray-600 group-hover:text-cyan-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <div>
                                <p className="font-medium text-gray-800 group-hover:text-cyan-700">GitHub</p>
                                <p className="text-sm text-gray-600">Code & Projects</p>
                            </div>
                        </a>

                        <a
                            href="https://pypi.org/user/Khader20/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-300 group"
                        >
                            <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Py</span>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800 group-hover:text-cyan-700">PyPI</p>
                                <p className="text-sm text-gray-600">Python Packages</p>
                            </div>
                        </a>

                        <a
                            href="https://khaderabueltayef.blogspot.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-300 group"
                        >
                            <svg className="w-8 h-8 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.995 3.901a9.976 9.976 0 00-7.995-3.901C7.021.001 2.966 4.056 2.966 9.024c0 4.96 4.038 9.008 9.005 9.008 4.967 0 9.004-4.048 9.004-9.008 0-1.015-.166-1.99-.48-2.915L15.85 9.88c-.317.955-1.17 1.676-2.176 1.676-1.29 0-2.337-1.047-2.337-2.337 0-1.29 1.047-2.337 2.337-2.337 1.005 0 1.858.72 2.175 1.675l3.67-3.67z" />
                            </svg>
                            <div>
                                <p className="font-medium text-gray-800 group-hover:text-cyan-700">Blog</p>
                                <p className="text-sm text-gray-600">Articles & Thoughts</p>
                            </div>
                        </a>

                        <a
                            href="https://gravatar.com/voiddevotedlyf473f5471f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors duration-300 group"
                        >
                            <svg className="w-8 h-8 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 8.5h-2.5V6.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2v2c0 .276.224.5.5.5s.5-.224.5-.5v-2h2c.276 0 .5-.224.5-.5s-.224-.5-.5-.5z" />
                            </svg>
                            <div>
                                <p className="font-medium text-gray-800 group-hover:text-cyan-700">Gravatar</p>
                                <p className="text-sm text-gray-600">Profile Picture</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-cyan-100 p-3 rounded-full mr-4">
                            <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Additional Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Driving License</h3>
                                <p className="text-gray-600">Category B</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">PyPI Organization</h3>
                                <p className="text-gray-600 mb-1"><strong>KX</strong> - Khader X</p>
                                <p className="text-sm text-gray-500">All packages use &quot;kx_&quot; prefix</p>
                                <p className="text-sm text-gray-500">Example: kx_publish-pypi</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Development</h3>
                            <p className="text-gray-600 mb-2">2023 - Gestion de base</p>
                            <p className="text-sm text-gray-500">Athénée Royal Vielsalm-Manhay, Belgium</p>
                            <p className="text-sm text-gray-500 mt-2">Focus: Entrepreneurship, Communication, Teamwork, Organization</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
