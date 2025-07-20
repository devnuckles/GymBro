import { Sparkles, Star } from "lucide-react";
import HeroLeftContent from "./hero.left.content.component";
import DynamicButton from "@/components/common/dynamic.button.component";

const HeroLeft = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-scale-in">
                <Sparkles className="w-4 h-4" />
                Next-Generation AI Training
            </div>

            <HeroLeftContent />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
                <DynamicButton
                    size="lg"
                    variant="gradient"
                    href="/generate-workout"
                    btnText="Start Training Now"
                />

                <DynamicButton
                    variant="outline"
                    size="lg"
                    href="https://youtube.com"
                    btnText=" Watch Demo"
                />
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>
                        <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                        <div className="w-8 h-8 bg-secondary rounded-full border-2 border-background"></div>
                    </div>
                    <span>Join 10,000+ athletes</span>
                </div>
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                    ))}
                    <span className="ml-1">4.9 rating</span>
                </div>
            </div>
        </div>
    );
};

export default HeroLeft;
