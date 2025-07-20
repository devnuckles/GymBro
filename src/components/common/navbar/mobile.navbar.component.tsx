import Link from "next/link";
import { MobileNavbarProps } from "@/types/common/dynamic.component.interfaces";

const MobileNavbar = ({ navMenuData, closeMobileMenu }: MobileNavbarProps) => {
    return (
        <div className="absolute top-20 left-0 w-screen lg:hidden bg-white px-4 pb-4 space-y-4">
            {navMenuData.map((item, index) => (
                <div key={index}>
                    {item.href && !item.children ? (
                        <Link
                            href={item.href}
                            className="block text-gray-700"
                            onClick={closeMobileMenu}
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <>
                            <span className="block text-gray-700 font-medium">
                                {item.label}
                            </span>
                            {item.children?.map((section, index) => (
                                <div key={index} className="pl-4">
                                    <h5 className="text-sm font-semibold mt-2">
                                        {section.title}
                                    </h5>
                                    <ul className="space-y-1 pl-2">
                                        {section.items.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-600 text-sm"
                                                    onClick={closeMobileMenu}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MobileNavbar;
