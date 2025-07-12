import HeroLeft from "./hero.left.component";
import HeroRight from "./hero.right.component";

const Hero = () => {
    return (
        <section className="bg-gradient-subtle flex items-center justify-center">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-28">
                <HeroLeft />
                <HeroRight />
            </div>
        </section>
    );
};

export default Hero;
