import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); // default 'isOpen' is false

    //insert navLinks here

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
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
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="matcha" size="lg">
                            Order Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    
                </div>
            </div>
        </nav>
    )

}