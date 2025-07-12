import { ReactNode } from "react";
export interface DynamicButtonProps {
    href?: string;
    btnText?: string;
    disabled?: boolean;
    className?: string;
    btnIcon?: React.ReactNode;
    size?: "default" | "sm" | "lg" | "icon";
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "link"
        | "gradient"
        | "glow";
}

export interface DynamicMegaMenuItem {
    label: string;
    href: string;
    description?: string;
}

export interface DynamicSubMenu {
    title: string;
    items: DynamicMegaMenuItem[];
}

export interface DynamicMenuItem {
    label: string;
    href?: string;
    children?: DynamicSubMenu[];
}

export interface DynamicNavigationMenuProps {
    navMenuData: DynamicMenuItem[];
}

export interface DynamicCardProps {
    title?: string;
    description?: string;
    action?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    className?: string;
}
