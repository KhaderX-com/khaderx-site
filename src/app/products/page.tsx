export default function Products() {
    return (
        <main className="p-10">
            <h1 className="text-4xl font-bold mb-6">📦 KhaderX Products</h1>
            <ul className="space-y-4">
                <li>
                    <strong>wingsecly</strong> — Python package for aeroelastic analysis
                    (<a href="https://pypi.org/project/wingsecly/" target="_blank" rel="noopener">PyPI</a>)
                </li>
                <li>
                    <strong>khx_rich_console</strong> — Rich console utilities
                    (<a href="https://pypi.org/project/khx-rich-console/" target="_blank" rel="noopener">PyPI</a>)
                </li>
                <li>
                    <strong>khx_publish_pypi</strong> — CLI for publishing packages
                    (<a href="https://pypi.org/project/khx-publish-pypi/" target="_blank" rel="noopener">PyPI</a>)
                </li>
            </ul>
        </main>
    );
}
