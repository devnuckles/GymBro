export interface DynamicButtonProps {
    href?: string;
    btnText?: string;
    className?: string;
    btnIcon?: React.ReactNode;
    size?: "default" | "sm" | "lg" | "icon";
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "link"
        | "gradient"
        | "glow";
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
