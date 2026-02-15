import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // default 'isOpen' is false

    const navLinks = [
        { name: "Menu", href: "#menu" },
        { name: "About", href: "#about" },
        { name: "Location", href: "#location" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <img
                            src="/fresso-logo.png"
                            alt="Fresso Logo"
                            className="h-10 lg:h-12 w-auto"
                        />
                        <span className="font-display text-2xl lg:text-3xl font-bond text-coffee">
                            Fresso
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Call to Action */}
                    {/* <div className="hidden md:flex items-center gap-4">
                        <Button variant="matcha" size="lg">
                            Order Now
                        </Button>
                    </div> */}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Mobile Navigation */}
                { isOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                            {/* <Button variant="matcha" className="mt-2">
                                Order Now
                            </Button> */}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );

};

export default Navbar;