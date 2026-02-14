import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";

const Index = () => {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Menu />
            <About />
            <Testimonials />
            <Location />
        </main>
    );
};

export default Index;