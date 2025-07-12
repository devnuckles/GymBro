"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import clsx from "clsx";
import { ReactNode } from "react";

interface DynamicCardProps {
    title?: string;
    description?: string;
    action?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    className?: string;
    cardFor?: "call-card" | "feature" | "profile" | string;
}

const cardStyles: Record<string, string> = {
    "call-card": "bg-card/90 backdrop-blur-sm aspect-video",
    feature: "bg-secondary/80 border border-dashed",
    profile: "bg-muted/50 shadow-md",
};

const DynamicCard = ({
    title,
    description,
    action,
    content,
    footer,
    className = "",
    cardFor = "default",
}: DynamicCardProps) => {
    const variantClass = cardStyles[cardFor] || "bg-card";

    return (
        <Card
            className={clsx(
                "overflow-hidden relative",
                variantClass,
                className
            )}
        >
            {(title || description || action) && (
                <CardHeader>
                    {title && <CardTitle>{title}</CardTitle>}
                    {description && (
                        <CardDescription>{description}</CardDescription>
                    )}
                    {action && <div className="mt-2">{action}</div>}
                </CardHeader>
            )}
            {content && <CardContent>{content}</CardContent>}
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    );
};

export default DynamicCard;
