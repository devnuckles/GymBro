import { FitnessPlan } from "./fitness.plans.interface";

export interface FitnessPlanSelectorProps {
    plans: FitnessPlan[];
    selectedPlanId: string | null;
    onSelect: (id: string) => void;
}

export interface FitnessPlanDetailsProps {
    plan: FitnessPlan;
}
