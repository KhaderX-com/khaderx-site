
export default function FooterBrand() {
    return (
        <div className="text-center sm:text-left lg:text-left space-y-2 sm:space-y-3 order-1 sm:order-1 lg:order-1">
            <div className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold inline-flex items-baseline">
                <span className="text-cyan-400 inline-block">K</span>
                <span className="text-white inline-block">hader</span>
                <span className="text-cyan-400 inline-block">X</span>
                <span className="text-gray-400 mx-1 sm:mx-2 inline-block">-</span>
                <span className="text-cyan-400 inline-block">K</span>
                <span className="text-cyan-400 inline-block">X</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs mx-auto sm:mx-0 lg:mx-0">
                <span className="text-cyan-400 font-medium">Engineering Tomorrow, Today</span>
                <br />
                <span className="text-gray-500 text-sm mt-1 block">Cutting-edge aerospace | aeronautical | mechanical engineering solutions and innovative software development</span>
            </p>
        </div>
    );
}
