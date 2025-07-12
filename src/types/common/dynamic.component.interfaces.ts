export interface DynamicButtonProps {
    href?: string;
    btnText: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "link";
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
