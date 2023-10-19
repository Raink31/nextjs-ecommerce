export default function Footer() {
    return (
        <footer className="bg-neutral p-10 text-neutral-content">
            <div className="footer m-auto max-w-7xl">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link-hover link">Branding</a>
                    <a href="/" className="link-hover link">Design</a>
                    <a href="/" className="link-hover link">Marketing</a>
                    <a href="/" className="link-hover link">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link-hover link">About Us</a>
                    <a href="/" className="link-hover link">Contact</a>
                    <a href="/" className="link-hover link">Jobs</a>
                    <a href="/" className="link-hover link">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link-hover link">Terms of use</a>
                    <a href="/" className="link-hover link">Privacy policy</a>
                    <a href="/" className="link-hover link">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
}