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
    disabled = false,
    variant = "default",
}: DynamicButtonProps) => {
    const content = (
        <div className="flex justify-between">
            {btnIcon && <span>{btnIcon}</span>}
            <span>{btnText}</span>
        </div>
    );

    return href ? (
        <Link href={href} className="cursor-pointer w-full">
            <Button
                asChild
                size={size}
                variant={variant}
                disabled={disabled}
                className={className}
            >
                {content}
            </Button>
        </Link>
    ) : (
        <Button
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            className={`cursor-pointer ${className}`}
        >
            {content}
        </Button>
    );
};

export default DynamicButton;
