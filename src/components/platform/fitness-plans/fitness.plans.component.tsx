"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import NoFitnessPlan from "./no.fitness.plan.component";
import FitnessPlansHeader from "./fitness.plans.header.component";
import FitnessPlanDetails from "./fitness.plan.details.component";
import FitnessPlanSelector from "./fitness.plan.selector.component";

const FitnessPlansComponent = () => {
    const { user } = useUser();
    const userId = user?.id as string;
    const allPlans = useQuery(api.plans.getUserPlans, { userId });
    const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

    console.log(allPlans);

    const activePlan = allPlans?.find((plan) => plan.isActive);
    const currentPlan = selectedPlanId
        ? allPlans?.find((plan) => plan._id === selectedPlanId)
        : activePlan;

    if (!allPlans || allPlans.length === 0) return <NoFitnessPlan />;

    return (
        <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
            <FitnessPlansHeader user={user} />

            <div className="space-y-8">
                <FitnessPlanSelector
                    plans={allPlans}
                    selectedPlanId={selectedPlanId}
                    onSelect={setSelectedPlanId}
                />

                {currentPlan && <FitnessPlanDetails plan={currentPlan} />}
            </div>
        </section>
    );
};

export default FitnessPlansComponent;
