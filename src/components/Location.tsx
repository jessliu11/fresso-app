import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const hours = [
    { day: "Monday - Thursday", time: "8:30AM - 8:00PM" },
    { day: "Friday-Saturday", time: "8:30AM-9:00PM" },
    { day: "Sunday", time: "8:30AM-7:00PM" },
];

const contactInfo = [
    { icon: Phone, label: "Phone", value: "(281) 704-6433", href: "tel:+2817046433" },
    { icon: Instagram, label: "Instagram", value: "@fressocafe", href: "https://instagram.com/fressocafe" }, 
];

const Location = () => {
    return (
        <section id="location" className="py-20 lg:py-32 bg-cream">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        Find Us
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                        Visit Our Cafe
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Map Placeholder */}
                    <Card className="overflow-hidden shadow-medium">
                        <CardContent className="p-0 h-full min-h-[400px]">
                            <div className="text-center p-8">
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 bg-matcha/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-8 h-8 text-matcha" />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                        4899 Hwy 6 Suite 116C
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Missouri City, TX 77459
                                    </p>
                                    <a 
                                        href="https://www.google.com/maps?sca_esv=22b7c102b56cf77f&rlz=1C5GCCM_enUS1166US1166&sxsrf=ANbL-n6Eor_ksCpo3zxKm3wJ7AQvx2alvw:1771109968256&kgmid=/g/11yfqtnsxq&kgs=3a0be770717a8d69&shndl=30&shem=epsd1,sume,shrtsdl&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KU8HSnqk50CGMRLTN3XwDa8r&daddr=4899+Hwy+6+Suite+116C,+Missouri+City,+TX+77459"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 font-medium trasnition-colors"
                                    >
                                        Get Directions →
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Info Cards */}
                    <div className="space-y-6">
                        {/* Hours */}
                        <Card className="shadow-card hover:shadow-medium transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-matcha/10 rounded-lg flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-matcha" />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-foreground">
                                        Hours of Operation
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {hours.map((schedule) => (
                                        <div
                                            key={schedule.day}
                                            className="flex justify-between items-center py-2 border-b border-border last:border-0"
                                        >
                                            <span className="text-foreground">{schedule.day}</span>
                                            <span className="text-muted-foreground font-medium">
                                                {schedule.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        {/* Contact */}
                        <Card className="shadow-card hover:shadow-medium transition-shadow duration-300" id="contact">
                            <CardContent className="p-6">
                                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                                    Get in Touch
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {contactInfo.map((info) => {
                                        const Icon = info.icon;
                                        return (
                                            <a 
                                                key={info.label}
                                                href={info.href}
                                                target={info.href.startsWith("http") ? "_blank" :undefined}
                                                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                                            >
                                                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                                <div>
                                                    <p className="text-xs text-muted-foreground">
                                                        {info.label}
                                                    </p>
                                                    <p className="text-sm font-medium text-foreground">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;