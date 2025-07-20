export interface Meal {
    name: string;
    foods: string[];
}

export interface DietPlan {
    dailyCalories: number;
    meals: Meal[];
}

export interface ExerciseRoutine {
    name: string;
    sets?: number;
    reps?: number;
    duration?: string;
    description?: string;
    exercises?: string[];
}
export interface WorkoutDay {
    day: string;
    routines: ExerciseRoutine[];
}

export interface WorkoutPlan {
    exercises: WorkoutDay[];
    schedule: string[];
}

export interface FitnessPlan {
    _id: string;
    name: string;
    userId: string;
    isActive: boolean;
    _creationTime: number;
    dietPlan: DietPlan;
    workoutPlan: WorkoutPlan;
}
