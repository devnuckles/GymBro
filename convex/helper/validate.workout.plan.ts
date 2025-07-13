export function validateWorkoutPlan(plan: any) {
    if (
        typeof plan !== "object" ||
        !Array.isArray(plan.schedule) ||
        !Array.isArray(plan.exercises)
    ) {
        throw new Error("Invalid workout plan structure");
    }

    const validatedPlan = {
        schedule: plan.schedule,
        exercises: plan.exercises.map((exercise: any) => ({
            day: typeof exercise.day === "string" ? exercise.day : "Unknown",
            routines: Array.isArray(exercise.routines)
                ? exercise.routines.map((routine: any) => ({
                      name:
                          typeof routine.name === "string"
                              ? routine.name
                              : "Exercise",
                      sets:
                          typeof routine.sets === "number"
                              ? routine.sets
                              : parseInt(routine.sets) || 1,
                      reps:
                          typeof routine.reps === "number"
                              ? routine.reps
                              : parseInt(routine.reps) || 10,
                  }))
                : [],
        })),
    };

    return validatedPlan;
}
