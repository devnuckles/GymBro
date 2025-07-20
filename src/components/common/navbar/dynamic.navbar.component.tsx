"use client";

import { useState } from "react";
import { AlignJustify } from "lucide-react";
import MobileNavbar from "./mobile.navbar.component";
import DesktopNavbar from "./desktop.navbar.component";
import DynamicButton from "../dynamic.button.component";
import { DynamicNavigationMenuProps } from "@/types/common/dynamic.component.interfaces";

const DynamicNavbar = ({ navMenuData }: DynamicNavigationMenuProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
    const closeMobileMenu = () => setMobileOpen(false);

    return (
        <nav>
            <div className="lg:hidden">
                <DynamicButton
                    size="lg"
                    variant="gradient"
                    className="text-3xl"
                    btnIcon={<AlignJustify />}
                    onClick={toggleMobileMenu}
                />
            </div>

            <DesktopNavbar navMenuData={navMenuData} />

            {mobileOpen && (
                <MobileNavbar
                    navMenuData={navMenuData}
                    closeMobileMenu={closeMobileMenu}
                />
            )}
        </nav>
    );
};

export default DynamicNavbar;
