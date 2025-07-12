import Link from "next/link";
import { Button } from "../ui/button";
import { DynamicButtonProps } from "@/types/common/dynamic.component.interfaces";

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
