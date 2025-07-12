"use client";

import { useState } from "react";
import DynamicButton from "./dynamic.button.component";
import MobileNavbar from "./navbar/mobile.navbar.component";
import DesktopNavbar from "./navbar/desktop.navbar.component";
import { DynamicNavigationMenuProps } from "@/types/common/dynamic.component.interfaces";
import { AlignJustify } from "lucide-react";

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

                {/* <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="cursor-pointer border flex justify-center border-primary text-gray-70 text-4xl focus:outline-none"
                ></button> */}
            </div>

            <DesktopNavbar navMenuData={navMenuData} />

            {/* Mobile Menu */}
            {mobileOpen && <MobileNavbar navMenuData={navMenuData} />}
        </nav>
    );
};

export default DynamicNavbar;
