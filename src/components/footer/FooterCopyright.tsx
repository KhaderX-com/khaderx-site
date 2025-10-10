
export default function FooterCopyright() {
    return (
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800/50 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <p className="text-xs sm:text-sm text-gray-400 font-medium">
                    © 2025 <span className="font-semibold"><span className="text-white">K</span><span className="text-white">hader</span><span className="text-white">X</span></span>. All rights reserved.
                </p>
                <p className="text-xs text-gray-500">
                    Engineering Tomorrow, Today
                </p>
            </div>
        </div>
    );
}
