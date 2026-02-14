import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";

const Index = () => {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Menu />
        </main>
    );
};

export default Index;