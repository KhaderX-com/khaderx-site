export default function ServicesHeader() {
    return (
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-gradient-to-r from-cyan-400/10 via-cyan-400/20 to-cyan-400/10 rounded-full mb-6 sm:mb-8 border border-cyan-400/20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
                <span className="mx-3 sm:mx-4 text-cyan-400 text-sm sm:text-base font-semibold uppercase tracking-wider font-brand">Professional Services</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 font-heading">
                Engineering <span className="text-gradient enhanced-glow">Excellence</span>
            </h2>

            <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6 px-4">
                    Discover our comprehensive range of professional services, combining cutting-edge aerospace | aeronautical | mechanical engineering
                    with innovative software development to deliver exceptional solutions.
                </p>
                <div className="flex justify-center">
                    <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                </div>
            </div>
        </div>
    );
}
