import Image from "next/image";
import { Zap, Brain } from "lucide-react";

const HeroRight = () => {
    return (
        <div className="relative animate-scale-in">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-elevated">
                <Image
                    src="/assets/hero-gym-ai.jpg"
                    alt="AI Gym Trainer Interface"
                    fill
                    className="object-cover"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow-pulse">
                <Zap className="w-8 h-8 text-primary-foreground" />
            </div>

            <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center animate-glow-pulse"
                style={{ animationDelay: "1s" }}
            >
                <Brain className="w-6 h-6 text-accent-foreground" />
            </div>
        </div>
    );
};

export default HeroRight;
