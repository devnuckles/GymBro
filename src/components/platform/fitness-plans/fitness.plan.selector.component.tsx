import CornerElements from "../../common/corner.elements.component";
import DynamicButton from "@/components/common/dynamic.button.component";
import { FitnessPlan } from "@/types/platform/fitness-plans/fitness.plans.interface";
import { FitnessPlanSelectorProps } from "@/types/platform/fitness-plans/fitness.plans.props.interface";

const FitnessPlanSelector = ({
    plans,
    selectedPlanId,
    onSelect,
}: FitnessPlanSelectorProps) => (
    <div className="relative backdrop-blur-sm border border-border p-6">
        <CornerElements />
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold tracking-tight">
                <span className="text-primary">Your</span>{" "}
                <span className="text-foreground">Fitness Plans</span>
            </h2>
            <div className="font-mono text-xs text-muted-foreground">
                TOTAL: {plans.length}
            </div>
        </div>

        <div className="flex flex-wrap gap-2">
            {plans.map((plan: FitnessPlan) => (
                <DynamicButton
                    key={plan._id}
                    onClick={() => onSelect(plan._id)}
                    btnText={
                        <>
                            {plan.name}
                            {plan.isActive && (
                                <span className="ml-2 bg-green-500/20 text-green-500 text-xs px-2 py-0.5 rounded">
                                    ACTIVE
                                </span>
                            )}
                        </>
                    }
                    className={`text-foreground border hover:text-white ${
                        selectedPlanId === plan._id
                            ? "bg-primary/20 text-primary border-primary"
                            : "bg-transparent border-border hover:border-primary/50"
                    }`}
                    variant="outline"
                    size="sm"
                />
            ))}
        </div>
    </div>
);

export default FitnessPlanSelector;
