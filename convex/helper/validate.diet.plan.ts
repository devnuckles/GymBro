export function validateDietPlan(plan: any) {
    if (
        typeof plan !== "object" ||
        typeof plan.dailyCalories !== "number" ||
        !Array.isArray(plan.meals)
    ) {
        throw new Error("Invalid diet plan structure");
    }

    const validatedPlan = {
        dailyCalories: plan.dailyCalories,
        meals: plan.meals.map((meal: any) => ({
            name: typeof meal.name === "string" ? meal.name : "Meal",
            foods: Array.isArray(meal.foods) ? meal.foods : [],
        })),
    };

    return validatedPlan;
}
