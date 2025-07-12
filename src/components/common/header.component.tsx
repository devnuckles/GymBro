"use client";

import Logo from "./logo.component";
import DynamicButton from "./dynamic.button.component";
import DynamicNavbar from "./navbar/dynamic.navbar.component";
import { navMenuData } from "@/utils/data/nav.menu.items.data";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";

const Header = () => {
    const { isSignedIn } = useUser();

    return (
        <header className="fixed w-screen top-0 left-0 z-50 bg-background/50 backdrop-blur-md border-b border-border py-3">
            <div className="relative">
                <div className="container mx-auto flex justify-between items-center h-16">
                    <Logo />

                    <div className="flex items-center justify-center space-x-4">
                        {isSignedIn && (
                            <DynamicNavbar navMenuData={navMenuData} />
                        )}
                        <div>
                            <SignedOut>
                                <div className="flex gap-x-2">
                                    <DynamicButton
                                        btnText="Sign Up"
                                        href="/sign-up"
                                        variant="outline"
                                    />
                                    <DynamicButton
                                        btnText="Sign In"
                                        href="/sign-in"
                                        variant="gradient"
                                    />
                                </div>
                            </SignedOut>

                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
