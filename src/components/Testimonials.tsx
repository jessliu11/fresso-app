import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Customer",
        content:
        "The ceremonial matcha latte here is the best I've had outside of Japan. The atmosphere is so warm and welcoming!",
        rating: 5,
        avatar: "SM",
    },
];
const Testimonials = () => {
    return (
        <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        Testimonials
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                        What Our Guests Say
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it — hear from the people who make 
                        Fresso their ritual.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="p-6">
                                {/* Quote Icon */}
                                <div className="w-10 h-10 bg-matcha/10 rounded-lg flex items-center justify-center mb-4">
                                    <Quote className="w-5 h-5 text-matcha" />
                                </div>
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-matcha text-matcha"
                                        />
                                    ))}
                                </div>
                                {/* Content */}
                                <p className="text-foreground mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-coffee rounded-full flex items-center justify-center text-primary-foreground font-medium text-sm">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;