import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface DynamicCardProps {
    title: string;
    description?: string;
    content: React.ReactNode;
    action?: React.ReactNode;
    footer?: React.ReactNode;
}

const DynamicCard = ({
    title,
    description,
    content,
    action,
    footer,
}: DynamicCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                {action && <CardAction>{action}</CardAction>}
            </CardHeader>
            <CardContent>{content}</CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    );
};

export default DynamicCard;
