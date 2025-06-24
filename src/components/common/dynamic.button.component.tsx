import Link from "next/link";
import { Button } from "../ui/button";

interface DynamicButtonProps {
    href?: string;
    btnText: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "link";
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DynamicButton = ({
    href,
    btnText,
    variant = "default",
    onClick,
}: DynamicButtonProps) => {
    return href ? (
        <Link href={href}>
            <Button variant={variant} asChild>
                <span>{btnText}</span>
            </Button>
        </Link>
    ) : (
        <Button variant={variant} onClick={onClick}>
            {btnText}
        </Button>
    );
};

export default DynamicButton;
