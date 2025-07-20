import {
    Meal,
    FitnessPlan,
} from "@/types/platform/fitness-plans/fitness.plans.interface";

const DietTabContent = ({ plan }: { plan: FitnessPlan }) => (
    <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-sm text-muted-foreground">
                DAILY CALORIE TARGET
            </span>
            <div className="font-mono text-xl text-primary">
                {plan.dietPlan.dailyCalories} KCAL
            </div>
        </div>

        <div className="h-px w-full bg-border my-4"></div>

        <div className="space-y-4">
            {plan.dietPlan.meals.map((meal: Meal, index: number) => (
                <div
                    key={index}
                    className="border border-border rounded-lg overflow-hidden p-4"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <h4 className="font-mono text-primary">{meal.name}</h4>
                    </div>

                    <ul className="space-y-2">
                        {meal.foods.map((food: string, foodIndex: number) => (
                            <li
                                key={foodIndex}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                                <span className="text-xs text-primary font-mono">
                                    {String(foodIndex + 1).padStart(2, "0")}
                                </span>
                                {food}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default DietTabContent;
