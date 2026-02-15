import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-img.jpg";

const Hero = () => {
    // Store hours configuration
    const storeHours = {
        0: { open: '8:30', close: '21:00', display: '8:30 AM–9 PM' }, // Sunday
        1: { open: '8:30', close: '20:00', display: '8:30 AM–8 PM' }, // Monday
        2: { open: '8:30', close: '20:00', display: '8:30 AM–8 PM' }, // Tuesday
        3: { open: '8:30', close: '20:00', display: '8:30 AM–8 PM' }, // Wednesday
        4: { open: '8:30', close: '20:00', display: '8:30 AM–8 PM' }, // Thursday
        5: { open: '8:30', close: '21:00', display: '8:30 AM–9 PM' }, // Friday
        6: { open: '8:30', close: '21:00', display: '8:30 AM–9 PM' }, // Saturday
    };

    // Get current day and time
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    const todayHours = storeHours[currentDay];

    // Check if currently open
    const isOpen = currentTime >= todayHours.open && currentTime < todayHours.close;

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
                    <div className="inline-flex items-center gap-2 bg-matcha/20 backdrop-blur-sm text-cream px-4 py-2 rounded-full mb-6 animate-fade-in max-w-[90vw]">
                        <span className="w-2 h-2 bg-matcha rounded-full animate-pulse flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-center leading-relaxed">
                            Valentine's Day Specials<br className="sm:hidden" /> Available Through 2/22
                        </span>
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
                        {/* <Button variant="matcha" size="xl">
                            Order Online
                        </Button> */}
                        <Button variant="matcha" size="xl">
                            View Menu
                        </Button>
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-col items-center justify-center gap-6 text-cream/80 animate-fade-in-up" style={{ animationDelay: "0.4s"}}>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-matcha" />
                            <span className="text-sm">4899 Hwy 6 Suite 116C, Missouri City, TX 77459</span>
                        </div>
                        <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <Clock size={18} className="text-matcha flex-shrink-0" />
                            <div className="flex items-center gap-2 text-sm">
                                <span className={`font-semibold ${isOpen ? 'text-matcha' : 'text-cream/60'}`}>
                                    {isOpen ? ' Open ' : ' Closed '}
                                </span>
                                <span className="text-cream/70">•</span>
                                <span className="font-medium text-cream">{todayHours.display}</span>
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