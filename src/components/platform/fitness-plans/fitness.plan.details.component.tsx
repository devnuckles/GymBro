import { AppleIcon, DumbbellIcon } from "lucide-react";
import DietTabContent from "./diet.tab.content.component";
import WorkoutTabContent from "./workout.tab.content.component";
import DynamicTabs from "@/components/common/dynamic.tab.component";

const FitnessPlanDetails = ({ plan }: any) => {
    const tabs = [
        {
            key: "workout",
            label: "Workout Plan",
            icon: <DumbbellIcon className="size-4" />,
            content: <WorkoutTabContent plan={plan} />,
        },
        {
            key: "diet",
            label: "Diet Plan",
            icon: <AppleIcon className="size-4" />,
            content: <DietTabContent plan={plan} />,
        },
    ];

    return <DynamicTabs title="PLAN" plan={plan} tabs={tabs} />;
};

export default FitnessPlanDetails;
