import DynamicButton from "@/components/common/dynamic.button.component";
import { Zap, Brain, Target, Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-gradient-subtle flex items-center justify-center">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-28">
                {/* Content */}
                <div className="space-y-8 animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-scale-in">
                        <Sparkles className="w-4 h-4" />
                        Next-Generation AI Training
                    </div>

                    {/* Headline */}
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            Your{" "}
                            <span className="bg-gradient-hero bg-clip-text text-transparent">
                                AI Gym
                            </span>
                            <br />
                            Trainer Agent
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Experience personalized workouts powered by advanced
                            AI. Get real-time form corrections, adaptive
                            training plans, and motivation that never stops.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Brain className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium">Smart AI Coach</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Target className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium">
                                Personalized Plans
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Zap className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium">
                                Real-time Feedback
                            </span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <DynamicButton
                            variant="gradient"
                            size="lg"
                            btnText="Start Training Now"
                        />

                        <DynamicButton
                            variant="outline"
                            size="lg"
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
                                <Sparkles
                                    key={i}
                                    className="w-4 h-4 text-primary fill-primary"
                                />
                            ))}
                            <span className="ml-1">4.9 rating</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative animate-scale-in">
                    <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                        <Image
                            src="/assets/hero-gym-ai.jpg"
                            alt="AI Gym Trainer Interface"
                            className="w-full h-auto"
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
            </div>
        </section>
    );
};

export default Hero;
