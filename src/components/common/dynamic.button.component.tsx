import Link from "next/link";
import { Button } from "../ui/button";
import { DynamicButtonProps } from "@/types/common/dynamic.component.interfaces";

const DynamicButton = ({
    href,
    btnIcon,
    btnText,
    onClick,
    className = "",
    size = "default",
    variant = "default",
}: DynamicButtonProps) => {
    const content = (
        <div className="flex justify-between">
            {btnIcon && <span>{btnIcon}</span>}
            <span>{btnText}</span>
        </div>
    );

    return href ? (
        <Link href={href} className="cursor-pointer">
            <Button variant={variant} size={size} className={className} asChild>
                {content}
            </Button>
        </Link>
    ) : (
        <Button
            variant={variant}
            onClick={onClick}
            className={`cursor-pointer ${className}`}
        >
            {content}
        </Button>
    );
};

export default DynamicButton;
