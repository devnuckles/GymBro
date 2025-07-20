import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicAccordionProps } from "@/types/common/dynamic.component.interfaces";

const DynamicAccordion = ({
    items,
    multiple = true,
    className = "space-y-4",
}: DynamicAccordionProps) => {
    return (
        <Accordion
            type={multiple ? "multiple" : "single"}
            className={className}
        >
            {items.map((item) => (
                <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border rounded-lg overflow-hidden"
                >
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/10 font-mono">
                        <div className="flex justify-between w-full items-center">
                            <span className="text-primary">{item.title}</span>
                            {item.countBadge && (
                                <div className="text-xs text-muted-foreground">
                                    {item.countBadge}
                                </div>
                            )}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-4">
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default DynamicAccordion;
