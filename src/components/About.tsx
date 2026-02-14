import { Heart, Leaf, User } from "lucide-react";

const values = [
    {
        icon: Leaf,
        title: "Tea Bar",
        description:
            "Hand-selected varities from Taiwan. Brewed to order with the GT-2 process."
    },
    {
        icon: Leaf,
        title: "Espresso Bar",
        description:
            "Locally raosted Central American blend. Velvety notes of dark chocolate and cardamom."
    },
    {
        icon: Leaf,
        title: "Matcha",
        description:
            "Premium blend of Aoarashi and Wakatake varieties from Marukyu Kayamaen, hand-whisked to perfection."
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-cream">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <div>
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">
                            Our Story
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                            A Cozy Corner for{" "}
                            <span className="text-primary">Every Cup</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Fresso was born from a simple dream: to create a space where the 
                                art of tea and coffee meets genuine hospitality. What started as 
                                a small corner shop has grown into a beloved neighborhood haven.
                            </p>
                            <p>
                                Our founders traveled across Japan and Southeast Asia, studying 
                                traditional brewing methods and sourcing the finest ingredients. 
                                Today, we bring those authentic flavors to your cup, one sip at a time.
                            </p>
                            <p>
                                Whether you're here for your morning matcha ritual, an afternoon 
                                coffee break, or an evening milk tea treat, we're honored to be 
                                part of your daily moments.
                            </p>
                        </div>
                    </div>
                    {/* Values Grid */}
                    <div className="grid gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="flex gap-5 p-6 bg-background rounded-2xl shawdow-card hover:shadow-medium transition-all duration-300 animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-matcha/10 rounded-xl flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-matcha" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg font-semibold text-foreground mg-1">
                                            {value.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;