import { Instagram , Facebook , Twitter } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        menu: [
            // { name: "All Drinks",  href: "#menu"},
            { name: "Specialties", href: "#menu" },
            { name: "Matcha", href: "#menu" },
            { name: "Coffee", href: "#menu" },
            { name: "Tea", href: "#menu" },
            { name: "Smoothies", href: "#menu" },

        ],
        company: [
            { name: "About Us", href: "#about" },
            { name: "Our Story", href: "#about" },
            { name: "Careers", href: "#" },
            { name: "Press" , href: "#" },
        ],
        support: [
            { name: "Contact", href: "#contact" },
            { name: "FAQ", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Press", href: "#" },
        ],
    };

    const socialLinks = [
        { icon: Instagram, href: "https://instagram.com/fressocafe", label: "Instagram" },
    ]

    return (
        <footer className="bg-coffee-dark py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mg-12 pb-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-display text-2xl font-bold text-cream mb-4">
                            Fresso
                        </h3>
                        <p className="text-cream/70 text-sm mb-6 max-w-xs">
                        Artisanal matcha, speciality coffee, and authentic milk tea.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream/70 hover:bg-matcha hover:text-cream transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    {/* Menu Links */}
                    <div>
                        <h4 className="font-semibold text-cream mb-4"> Menu </h4>
                        <ul className="space-y-2">
                            {footerLinks.menu.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-cream/70 hover:text-matcha transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-cream mb-4"> Company </h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-cream/70 hover:text-matcha transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Support Links */}
                    <div>
                        <h4 className="font-semibold text-cream mb-4">Support</h4>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-cream/70 hover:text-matcha transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-cream/50 text-sm">
                    © {currentYear} Fresso Cafe. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-cream/50 hover:text-cream transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-cream/50 hover:text-cream transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;