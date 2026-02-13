import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-img.jpg";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Fresso Cafe interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero" />gg
            </div>
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-matcha/20 backdrop-blur-sm text-cream px-4 py-2 rounded-full mb-6 animate-fade-in">
                        <span className="w-2 h-2 bg-matcha rounded-full animate-pulse" />
                        <span className="text-sm font-medium" > Now Open • Fresh Drinks Daily</span>
                    </div>
                    
                    {/* Heading */}
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-cream mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s"}}>
                        Savor Every Sip at{" "}
                        <span className="text-matcha">Fresso</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto animate-fade-in-up font-light" style={{ animationDelay:"0.2s"}}>
                        Coffee, Matcha, Milk Tea & More
                    </p>

                    {/* Call to Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s"}}>
                        <Button variant="matcha" size="xl">
                            Order Online
                        </Button>
                        <Button variant="hero-outline" size="xl">
                            View Menu
                        </Button>
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-col items-center justify-center gap-6 text-cream/80 animate-fade-in-up" style={{ animationDelay: "0.4s"}}>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-matcha" />
                            <span className="text-sm">4899 Hwy 6 Suite 116C, Missouri City, TX 77459</span>
                        </div>
                        <div className="flex items-start gap-3 bg-black/20 backdrop-blur-sm px-6 py-4 rounded-lg">
                            <Clock size={18} className="text-matcha mt-0.5 flex-shrink-0" />
                            <div className="flex flex-col gap-1 text-sm">
                                <div className="flex justify-between gap-8">
                                    <span className="text-cream/70">Thursday</span>
                                    <span className="font-medium">8:30 AM–8 PM</span>
                                </div>
                                <div className="flex justify-between gap-8">
                                    <span className="text-cream/70">Friday</span>
                                    <span className="font-medium">8:30 AM–9 PM</span>
                                </div>
                                <div className="flex justify-between gap-8">
                                    <span className="text-cream/70">Saturday</span>
                                    <span className="font-medium">8:30 AM–9 PM</span>
                                </div>
                                <div className="flex justify-between gap-8">
                                    <span className="text-cream/70">Sunday</span>
                                    <span className="font-medium">8:30 AM–9 PM</span>
                                </div>
                                <div className="flex justify-between gap-8">
                                    <span className="text-cream/70">Monday</span>
                                    <span className="font-medium">8:30 AM–8 PM</span>
                                </div>
                                <div className="flex justify-between gap-8">
                                    <span className="text-cream/70">Tuesday</span>
                                    <span className="font-medium">8:30 AM–8 PM</span>
                                </div>
                                <div className="flex justify-between gap-8">
                                    <span className="text-cream/70">Wednesday</span>
                                    <span className="font-medium">8:30 AM–8 PM</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-cream/50 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    )
}

export default Hero;