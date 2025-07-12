"use client";

import Logo from "./logo.component";
import { useUser } from "@clerk/nextjs";
import { navMenuData } from "@/utils/data/nav.menu.items.data";
import DynamicNavbar from "./dynamic.navbar.component";

const Header = () => {
    const { isSignedIn } = useUser();

    return (
        <header className="fixed w-screen top-0 left-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
            <div className="relative">
                <div className="container mx-auto flex justify-between items-center h-16">
                    <Logo />
                    <DynamicNavbar navMenuData={navMenuData} />
                </div>
            </div>
        </header>
    );
};

export default Header;
