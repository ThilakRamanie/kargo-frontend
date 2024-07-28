import { Curriculum } from "../../Component/Landing/Curriculum";
import Header from "../../Component/Landing/Header";
import { HeroComponent } from "../../Component/Landing/Hero";
import { Footer } from "../../Component/Landing/Footer";

export const LandingPage = () => {
    return (
        <>
            <Header />
            <HeroComponent />
            <Curriculum />
            <Footer />
        </>
    );
}