import { ReactNode } from "react";
import { FitnessPlan } from "../platform/fitness-plans/fitness.plans.interface";
export interface DynamicButtonProps {
    href?: string;
    btnText?: string | React.ReactNode;
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

export interface MobileNavbarProps extends DynamicNavigationMenuProps {
    closeMobileMenu: () => void;
}

export interface DynamicCardProps {
    title?: string;
    description?: string;
    action?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    className?: string;
}

export interface DynamicTab {
    key: string;
    label: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
}

export interface DynamicTabsProps {
    title?: string;
    tabs: DynamicTab[];
    plan?: FitnessPlan;
}

export interface DynamicAccordionItem {
    value: string;
    title: React.ReactNode;
    countBadge?: string | React.ReactNode;
    content: React.ReactNode;
}

export interface DynamicAccordionProps {
    items: DynamicAccordionItem[];
    multiple?: boolean;
    className?: string;
}
