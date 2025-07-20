import { CalendarIcon } from "lucide-react";
import DynamicAccordion from "@/components/common/dynamic.accordion.component";
import { DynamicAccordionItem } from "@/types/common/dynamic.component.interfaces";
import {
    WorkoutDay,
    FitnessPlan,
    ExerciseRoutine,
} from "@/types/platform/fitness-plans/fitness.plans.interface";

const WorkoutTabContent = ({ plan }: { plan: FitnessPlan }) => {
    const items: DynamicAccordionItem[] = plan.workoutPlan.exercises.map(
        (exerciseDay: WorkoutDay) => ({
            value: exerciseDay.day,
            title: exerciseDay.day,
            countBadge: `${exerciseDay.routines.length} EXERCISES`,
            content: (
                <div className="space-y-3 mt-2">
                    {exerciseDay.routines.map(
                        (routine: ExerciseRoutine, index: number) => (
                            <div
                                key={index}
                                className="border border-border rounded p-3 bg-background/50"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h4 className="font-semibold text-foreground line-clamp-1 max-w-[50%]">
                                        {routine.name}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-mono">
                                            {routine.sets} SETS
                                        </div>
                                        <div className="px-2 py-1 rounded bg-secondary/20 text-secondary text-xs font-mono">
                                            {routine.reps} REPS
                                        </div>
                                    </div>
                                </div>
                                {routine.description && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {routine.description}
                                    </p>
                                )}
                            </div>
                        )
                    )}
                </div>
            ),
        })
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <CalendarIcon className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">
                    SCHEDULE: {plan.workoutPlan.schedule.join(", ")}
                </span>
            </div>

            <DynamicAccordion items={items} />
        </div>
    );
};

export default WorkoutTabContent;
