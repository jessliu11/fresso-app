import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Leaf, Coffee, Milk, Sparkles } from "lucide-react";

type Category = "all" | "matcha" | "coffee" | "tea" | "speciality" | "smoothie";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: Category;
    image: string;
    popular?: boolean;
    customizable?: string[];
    allergens?: string[];
}

const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Matcha Latte",
        description: "Lightly sweetened with agave",
        price: "$6.90",
        category: "matcha",
        image: "🍵",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 2,
        name: "Matcha Duo",
        description: "Matcha latte with house matcha cream, contains 6g of matcha",
        price: "$7.20",
        category: "matcha",
        image: "🍵",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 3,
        name: "Einspanner Matcha",
        description: "Matcha latte with house sweet cream",
        price: "$7.00",
        category: "matcha",
        image: "🍵",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 4,
        name: "Strawberry Duo",
        description: "Matcha Duo with house strawberry purée",
        price: "$7.40",
        category: "matcha",
        image: "🍵",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 5,
        name: "Mango Duo",
        description: "Matcha Duo with house mango purée",
        price: "$7.40",
        category: "matcha",
        image: "🍵",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 6,
        name: "Cloud Matcha",
        description: "Matcha latte with blue spirulina infused coconut cream",
        price: "$7.30",
        category: "matcha",
        image: "🍵",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 7,
        name: "Caffé Duo",
        description: "Latte with espresso cream",
        price: "$6.10",
        category: "coffee",
        image: "☕",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 8,
        name: "Vanilla Bean Latte",
        description: "",
        price: "$5.70",
        category: "coffee",
        image: "☕",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 9,
        name: "Caffé Mocha",
        description: "Organic Peruvian chocolate",
        price: "$5.70",
        category: "coffee",
        image: "☕",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 10,
        name: "Espresso",
        description: "Double shot",
        price: "$3.50",
        category: "coffee",
        image: "☕",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 11,
        name: "Americano",
        description: "",
        price: "$3.50",
        category: "coffee",
        image: "☕",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 12,
        name: "Flat White",
        description: "",
        price: "$4.50",
        category: "coffee",
        image: "☕",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 13,
        name: "Fresso Black",
        description: "Earthy notes of barley and honey",
        price: "$5.90",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Sweetness", "Ice Level", "Milk Choice"],
    },
    {
        id: 14,
        name: "Jasmine Green",
        description: "Floral aroma with a smooth finish",
        price: "$5.50/$5.90",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Pure Tea", "Milk Tea(+0.4)"],
    },
    {
        id: 15,
        name: "Strawberry Green",
        description: "Jasmine green milk tea sweetened with real strawberry chunks",
        price: "$6.00",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Milk Tea"],
    },
    {
        id: 16,
        name: "Tieguanyin Oolong",
        description: "Medium-dark roast with nuttiness and earthy depth",
        price: "$5.50/$5.90",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Pure Tea", "Milk Tea(+0.4)"],
    },
    {
        id: 17,
        name: "Brown Sugar",
        description: "",
        price: "$6.00",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Milk Tea"],
    },
    {
        id: 18,
        name: "Mango Green",
        description: "",
        price: "$5.60/$6.00",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Pure Tea", "Milk Tea(+0.4)"],
    },
    {
        id: 19,
        name: "Honey Jasmine Green",
        description: "",
        price: "$5.70",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Pure Tea"],
    },
    {
        id: 20,
        name: "Passionfruit Green",
        description: "",
        price: "$5.70",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Pure Tea"],
    },
    {
        id: 21,
        name: "Ceylon Black",
        description: "",
        price: "$5.70/$5.90",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Pure Tea", "Milk Tea(+0.4)"],
    },
    {
        id: 22,
        name: "Phoenix Oolong",
        description: "",
        price: "$5.70/$5.90",
        category: "tea",
        image: "🫖",
        popular: false,
        customizable: ["Pure Tea", "Milk Tea(+0.4)"],
    },
    {
        id: 23,
        name: "Tornado",
        description: "Strawberry, Mango, or Strawberry Banana",
        price: "$6.00",
        category: "smoothie",
        image: "🫖",
        popular: false,
    },
    {
        id: 24,
        name: "Matcha Duo",
        description: "Marukyu Koyamaen matcha latte with house matcha cream",
        price: "7.2",
        category: "speciality",
        image: "🫖",
        popular: false,
    },
    {
        id: 25,
        name: "Lotus Einspanner",
        description: "Double shot espresso latte, topped with sweet cream and Biscoff crumble",
        price: "6.3",
        category: "speciality",
        image: "🫖",
        popular: false,
    },
    {
        id: 26,
        name: "Fresso Black",
        description: "Signature milk tea with earthy notes of barley and honey, brewed to order",
        price: "5.9",
        category: "speciality",
        image: "🫖",
        popular: false,
        customizable: ["Add toppings for 0.5"],
    },
    {
        id: 27,
        name: "Strawberry Matcha Duo",
        description: "Matcha Duo with house strawberry purée",
        price: "7.4",
        category: "speciality",
        image: "🫖",
        popular: false,
    },
    {
        id: 29,
        name: "Tiramisu Latte",
        description: "",
        price: "6.5",
        category: "speciality",
        image: "🫖",
        popular: false,
    },
    {
        id: 30,
        name: "Strawberry Green Milk Tea",
        description: "",
        price: "6",
        category: "speciality",
        image: "🫖",
        popular: false,
    },
    {
        id: 31,
        name: "Cloud Matcha",
        description: "",
        price: "7.3",
        category: "speciality",
        image: "🫖",
        popular: false,
    },
    {
        id: 32,
        name: "Tieguanyin Oolong",
        description: "",
        price: "5.9",
        category: "speciality",
        image: "🫖",
        popular: false,
    }
]

const categories = [
    { id: "all", name: "All Drinks", icons: Sparkles },
    { id: "speciality", name: "Specialities", icons: Milk },
    { id: "matcha", name: "Matcha", icons: Leaf },
    { id: "coffee", name: "Coffee", icons: Coffee },
    { id: "tea", name: "Tea", icons: Milk },
    { id: "smoothie", name: "Smoothie", icons: Milk },
]
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const filteredItems = 
        activeCategory === "all"
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    return (
        <section id="menu" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        Our Menu
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                        Crafted With Love
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Every drink is made to order with premium ingredients. Customize your sweet, ice level, and toppings to make it perfect for you.
                    </p>
                </div>
                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => {
                        const Icon = category.icons;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id as Category)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duraction-300 ${
                                    activeCategory === category.id
                                        ? "bg-primary text-primary-foreground shadow-soft"
                                        : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                }`}
                            >
                                <Icon size={18} />
                                {category.name}
                            </button>
                        );
                    })}
                </div>
                
                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, index) => (
                        <Card 
                            key={item.id}
                            className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium overflow-hidden animate-fade-in"
                            style={{ animationDelay: `${ index * 0.05}s` }}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                        {item.image}
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl font-bold text-primary">
                                            {item.price}
                                        </span>
                                        {item.popular && (
                                            <Badge className="ml-2 bg-matcha/10 text-matcha border-matcha/20">
                                                Popular
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                    {item.name}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {item.description}
                                </p>

                                {item.customizable && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.customizable.map((option) => (
                                            <span
                                                key={option}
                                                className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                                            >
                                                {option}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        Can't decide? Visit us and let our baristas help you find your perfect drink!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Menu;