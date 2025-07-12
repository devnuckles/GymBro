"use client";

import { useState } from "react";
import Logo from "./logo.component";
import MobileNavbar from "./navbar/mobile.navbar.component";
import DesktopNavbar from "./navbar/desktop.navbar.component";
import { DynamicNavigationMenuProps } from "@/types/common/dynamic.component.interfaces";

const DynamicNavbar = ({ navMenuData }: DynamicNavigationMenuProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-screen">
            <div className="relative">
                <div className="container mx-auto ">
                    <div className="w-full flex justify-between items-center h-16">
                        <Logo />
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="text-gray-70 text-4xl focus:outline-none"
                            >
                                ☰
                            </button>
                        </div>

                        <DesktopNavbar navMenuData={navMenuData} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && <MobileNavbar navMenuData={navMenuData} />}
        </nav>
    );
};

export default DynamicNavbar;
