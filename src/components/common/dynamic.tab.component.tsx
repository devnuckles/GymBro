import CornerElements from "./corner.elements.component";
import { DynamicTabsProps } from "@/types/common/dynamic.component.interfaces";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DynamicTabs = ({ title, tabs, plan }: DynamicTabsProps) => {
    return (
        <div className="relative backdrop-blur-sm border border-border rounded-lg p-6">
            <CornerElements />

            {title && (
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <h3 className="text-lg font-bold">
                        {title}:{" "}
                        <span className="text-primary font-semibold">
                            {plan?.name}
                        </span>
                    </h3>
                </div>
            )}

            <Tabs defaultValue={tabs[0]?.key} className="w-full">
                <TabsList className="mb-6 w-full grid grid-cols-2 bg-cyber-terminal-bg border">
                    {tabs.map(({ key, label, icon }) => (
                        <TabsTrigger
                            key={key}
                            value={key}
                            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                        >
                            {icon && <span className="mr-2">{icon}</span>}
                            {label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabs.map(({ key, content }) => (
                    <TabsContent key={key} value={key}>
                        {content}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default DynamicTabs;
