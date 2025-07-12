import Link from "next/link";
import { Button } from "../ui/button";
import { DynamicButtonProps } from "@/types/common/dynamic.component.interfaces";

const DynamicButton = ({
    href,
    btnText,
    variant = "default",
    size = "default",
    onClick,
}: DynamicButtonProps) => {
    return href ? (
        <Link href={href} className="cursor-pointer">
            <Button variant={variant} size={size} asChild>
                <span>{btnText}</span>
            </Button>
        </Link>
    ) : (
        <Button variant={variant} onClick={onClick} className="cursor-pointer">
            {btnText}
        </Button>
    );
};

export default DynamicButton;
