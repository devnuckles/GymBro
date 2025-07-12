"use client";

import { useState } from "react";
import { AlignJustify } from "lucide-react";
import DynamicButton from "./dynamic.button.component";
import MobileNavbar from "./navbar/mobile.navbar.component";
import DesktopNavbar from "./navbar/desktop.navbar.component";
import { DynamicNavigationMenuProps } from "@/types/common/dynamic.component.interfaces";

const DynamicNavbar = ({ navMenuData }: DynamicNavigationMenuProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav>
            <div className="lg:hidden">
                <DynamicButton
                    size="lg"
                    variant="gradient"
                    className="text-3xl"
                    btnIcon={<AlignJustify />}
                    onClick={() => setMobileOpen(!mobileOpen)}
                />
            </div>

            <DesktopNavbar navMenuData={navMenuData} />

            {mobileOpen && <MobileNavbar navMenuData={navMenuData} />}
        </nav>
    );
};

export default DynamicNavbar;
