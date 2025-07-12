import { Brain, Target, Zap } from "lucide-react";

const HeroLeftContent = () => {
    return (
        <>
            {/* Headline */}
            <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Your{" "}
                    <span className="bg-gradient-hero bg-clip-text text-transparent">
                        AI Fitness
                    </span>
                    <br />
                    Trainer Agent
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    Experience personalized workouts powered by advanced AI. Get
                    real-time form corrections, adaptive training plans, and
                    motivation that never stops.
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
                    <span className="font-medium">Personalized Plans</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">Real-time Feedback</span>
                </div>
            </div>
        </>
    );
};

export default HeroLeftContent;
